import './photos.css';
import bath from '../../static/m1.jpg';
import bath2 from '../../static/m2.jpg';
import bath3 from '../../static/m3.webp';

function Photos() {
    return (<>
        <h3>Архив прошедших событий </h3>
        <img alt='' className='demo-photo' src={bath} />
        <img alt='' className='demo-photo' src={bath2} />
        <img alt='' className='demo-photo' src={bath3} />
    </>)
}

export default Photos;