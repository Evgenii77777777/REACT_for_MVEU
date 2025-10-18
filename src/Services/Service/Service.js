import './service.css';

function Service({service}) {
    return (<div className='service-card'>
        <img alt={service.name} src={service.img} />
        <div>
            <h4>{ service.name }</h4>
            <span>Стоимость: { service.price } за { service.mesurement }</span>
            <p>{ service.description }</p>
        </div>
    </div>);
}

export default Service;