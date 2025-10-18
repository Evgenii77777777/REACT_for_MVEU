import './css/adminMain.css';
import { Outlet, NavLink } from "react-router";

function AdminLayout() {
    return (<div className="admin flex-row">
        <header>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/admin/services">Меню</NavLink>
            <NavLink to="/admin/examples">Заказ</NavLink>
            <NavLink to="/admin/blogs">Блоги</NavLink>
            <NavLink to="/admin/cliens">Клиенты</NavLink>
            <NavLink to="/admin/subscribers">Подписчики</NavLink>
        </header>
        <div style={{flex: '1 1', marginLeft: '20px', paddingRight: '20px', maxWidth: '1400px'}}>
            <Outlet />
        </div>
    </div>);
}
  
export default AdminLayout;