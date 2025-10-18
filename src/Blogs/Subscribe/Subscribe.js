import './subscribe.css';
import { useRef, useState, useEffect } from 'react';
import subscribe from '../../api/subscribers';

function Subscribe() {
    const [isSendedForm, setIsSendedForm] = useState(false);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    let timer = null;

    const sendForm = () => {
        const client = {
            name: nameRef.current.value,
            email: emailRef.current.value,
        }

        subscribe(client);
        timer = setTimeout(() => setIsSendedForm(false), 5000);
        setIsSendedForm(true);
        nameRef.current.value = '';
        emailRef.current.value = '';
    }

    useEffect(() => {
        return () => timer && clearTimeout(timer);
    }, [timer])

    return (<>
        <h4>Подпишитесь на новости</h4>
        { isSendedForm && <div className='sended-form'>Вы подписались</div> }
        <div className='subscribe-form'>
            <div>
                <label htmlFor='name'>Ваше имя</label>
                <input id='name' type='text' ref={nameRef} />
            </div>
            <div>
                <label htmlFor='email'>Почта</label>
                <input id='email' type='email' ref={emailRef} />
            </div>
            <button onClick={() => sendForm()}>Отправить</button>
        </div>
    </>)
}

export default Subscribe;