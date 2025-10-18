import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from 'react';
import { addFile } from '../api/file';
import getServicesAsync from '../api/services';
import { addExample } from '../api/examples';

function AdminExamples() {
    const fileRef = useRef(null);
    const [serviceName, setServiceName] = useState('');
    const [isSended, setIsSended] = useState(false);
    let timer = null;

    const dispatch = useDispatch();
    const services = useSelector(state => state.services.services).map(x => x.name);

    useEffect(() => {
        dispatch(getServicesAsync());
        return () => timer && clearTimeout(timer);
    }, [dispatch, timer]);
    

    const sendExample = async () => {
        const file = fileRef.current.files[0];

        if (!file || !serviceName) {
            return;
        }

        const filePath = await addFile(file);

        const example = {
            service: serviceName,
            img: `/statics/${filePath}`,
        }

        await addExample(example);
        setIsSended(true);
        timer = setTimeout(() => setIsSended(false), 5000);
        fileRef.current.value = '';
    }

    return (<>
        <h1>Добавление </h1>
        { isSended && <div className='sended-form'> добавлен</div> }
        <div>
            <select className='gallery-select' onChange={event => setServiceName(event.target.value)} defaultValue={serviceName}>
                <option value='' disabled={true}>Выберете </option>
                {services.map(x => 
                    <option key={x} value={x}>{x}</option>
                )}
            </select>
            <div>
                <label htmlFor='file'>Картинка</label>
                <input id='file' type='file' ref={fileRef} accept=".webp,.jpg,.jpeg,.png,.gif" />
            </div>
            <br />
            <button onClick={() => sendExample()}>Отправить</button>
        </div>
    </>)
}

export default AdminExamples;