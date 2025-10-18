import { useRef, useState, useEffect } from 'react';
import { addFile } from '../api/file';
import { addService } from '../api/services';

function AdminServices() {
    const nameRef = useRef(null);
    const descriprionRef = useRef(null);
    const priceRef = useRef(null);
    const mesurementRef = useRef(null);
    const fileRef = useRef(null);
    const [isSended, setIsSended] = useState(false);
    let timer = null;

    const sendForm = async () => {
        const file = fileRef.current.files[0];

        if (!file) {
            return;
        }

        const filePath = await addFile(file);

        const service = {
            name: nameRef.current.value,
            descriprion: descriprionRef.current.value,
            price: priceRef.current.value,
            mesurement: mesurementRef.current.value,
            img: `/statics/${filePath}`,
        }

        await addService(service);
        setIsSended(true);
        fileRef.current.value = '';
        nameRef.current.value = '';
        descriprionRef.current.value = '';
        priceRef.current.value = '';
        mesurementRef.current.value = '';
        timer = setTimeout(() => setIsSended(false), 5000);
    }

    useEffect(() => {
        return () => timer && clearTimeout(timer);
    }, [timer])

    return (<>
        <h1>Добавление нового ассортимента меню</h1>
        { isSended && <div className='sended-form'>блюдо добавлено</div> }
        <div>
            <div>
                <label htmlFor='name'>Название</label>
                <input id='name' type='text' ref={nameRef} />
            </div>
            <div>
                <label htmlFor='descriprion'>Описание</label>
                <textarea id='descriprion' ref={descriprionRef} rows='5' ></textarea>
            </div>
            <div>
                <label htmlFor='price'>Цена</label>
                <input id='price' type='text' ref={priceRef} />
            </div>
            <div>
                <label htmlFor='mesurement'>Единица измерения</label>
                <input id='mesurement' type='text' ref={mesurementRef} />
            </div>
            <div>
                <label htmlFor='file'>Картинка</label>
                <input id='file' type='file' ref={fileRef} accept=".webp,.jpg,.jpeg,.png,.gif" />
            </div>
            <br />
            <button onClick={() => sendForm()}>Отправить</button>
        </div>
    </>)
}

export default AdminServices;