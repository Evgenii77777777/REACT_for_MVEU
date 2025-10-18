import { useRef, useState, useEffect } from 'react';
import { addBlog } from '../api/blogs';
import { v4 as uuid } from 'uuid'

function AdminBlog() {
    const [isSended, setIsSended] = useState(false);
    const titleRef = useRef(null);
    const previewRef = useRef(null);
    const textRef = useRef(null);    
    let timer = null;

    const sendBlog = async () => {
        const blog = {
            guid: uuid(),
            title: titleRef.current.value,
            preview: previewRef.current.value,
            text: textRef.current.value,
            comments: []
        }

        titleRef.current.value = '';
        previewRef.current.value = '';
        textRef.current.value = '';
        await addBlog(blog);
        setIsSended(true);
        timer = setTimeout(() => setIsSended(false), 5000);
    }

    useEffect(() => {
        return () => timer && clearTimeout(timer);
    }, [timer]);

    return (<>
        <h1>Добавление блога</h1>
        { isSended && <div className='sended-form'>Блог добавлен</div> }
        <div>
            <div>
                <label htmlFor='title'>Название</label>
                <input id='title' type='text' ref={titleRef} />
            </div>
            <div>
                <label htmlFor='preview'>Превью</label>
                <textarea id='preview' ref={previewRef} rows='5' ></textarea>
            </div>
            <div>
                <label htmlFor='text'>Текст</label>
                <textarea id='text' ref={textRef} rows='5' ></textarea>
            </div>
            <br />
            <button onClick={() => sendBlog()}>Отправить</button>
        </div>
    </>)
}

export default AdminBlog;