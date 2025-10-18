import './gallery.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getExamplesAsync from '../api/examples';
import getServicesAsync from '../api/services';
import GalleryPhoto from './GalleryPhoto/GalleryPhoto';

function Gallery() {
    const dispatch = useDispatch();

    const [serviceName, setServiceName] = useState('all');
    const examples = useSelector(state => state.examples.examples);
    const services = useSelector(state => state.services.services)
        .map(x => {
            return { 
                name: x.name, 
                exist: examples.some(y => y.service === x.name),
            }
        });

    useEffect(() => {
        dispatch(getServicesAsync());
        dispatch(getExamplesAsync());
    }, [dispatch]);
    
    return (<>
        <h1>Галлерея</h1>
        <select className='gallery-select' onChange={event => setServiceName(event.target.value)} defaultValue={serviceName}>
            <option value='all'>Все</option>
            {services.map(x => 
                <option key={x.name} value={x.name} disabled={!x.exist} >{x.name}</option>
            )}
        </select>
        <div className='gallery-photos'>
            { examples
                .filter(x => serviceName === 'all' ? true : serviceName === x.service)
                .map((x, index) => <GalleryPhoto key={x.service + index} photo={x} />)
            }
        </div>
    </>);
}

export default Gallery;