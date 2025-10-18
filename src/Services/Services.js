import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getServicesAsync from '../api/services';
import Service from './Service/Service';

function Services() {
    const dispatch = useDispatch();
    
    const services = useSelector(
        state => state.services.services,
    );

    useEffect(() => {
        dispatch(getServicesAsync());
    }, [dispatch]);

    return (<>
        <h1>Меню</h1>
        { services.map(x => <Service key={x.name} service={x}/>) }
    </>);
}

export default Services;