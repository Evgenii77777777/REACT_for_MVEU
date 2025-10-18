import './css/main.css';
import { Outlet } from "react-router";
import Header from './header/Header';

function Layout() {
    return (<>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </>);
}
  
export default Layout;