import './header.css';
import logo from '../static/logo.jpg';
import { NavLink } from "react-router";

function Header() {
    return (
        <header className="header">
          <NavLink to="/"><img className='header-logo' src={logo} aria-label='Главная' /></NavLink>
          <div className="header-links">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/about">Мероприятия</NavLink>
            <NavLink to="/blogs">Блок с отзывами клиентов</NavLink>
            <NavLink to="/services">Меню</NavLink>
            <NavLink to="/calculate">Оформить заказ</NavLink>
            
            <NavLink to="/gallery">Галлерея</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
           
          </div>
        </header>
  );
}

export default Header;