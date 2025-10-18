import './contacts.css';
import { useRef, useState } from 'react';
import sendClient from '../api/clients';

function Contacts() {
    const [isSendedForm, setIsSendedForm] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const sendForm = () => {
        const client = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        }

        sendClient(client);

        setIsSendedForm(true);
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
    }

    const form = isSendedForm
        ? <div className='sended-form'>Форма отправлена</div>
        : <>
        <h2>Можете связаться с нами через форму</h2>
        <div className='contact-form'>
            <div>
                <label htmlFor='name'>Ваше имя</label>
                <input id='name' type='text' ref={nameRef} />
            </div>
            <div>
                <label htmlFor='email'>Почта</label>
                <input id='email' type='email' ref={emailRef} />
            </div>
            <div>
                <label htmlFor='phone'>Телефон</label>
                <input id='phone' type='text' ref={phoneRef} />
            </div>
            <button onClick={() => sendForm()}>Отправить</button>
        </div>
        </>

    return (<>
        <h1>Наши контакты</h1>
        Телефон: <a href='tel:+7561230005'>8-956-123-00-05 </a>
        <br />
        Email: <a href='mailto:KofeiKnigi@mail.ru'>KofeiKnigi@mail.ru</a>
        <br />  <br />
        Адрес: г. Калуга,  ул. Автозаводская, 15
        <br />  <br />
        График работы:
         <br /> 
         пн, вт, ср, чт, пт: 8:00 - 19:00
          <br />
         сб, вс: 8:00 - 16:00

        <br />
        <div>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.543671%2C55.694091&z=18" title='Где мы' height="400" frameBorder={1} allowFullScreen={true} style={{width: '100%'}}></iframe>
        </div>
        
        { form }
    </>);
}

export default Contacts;