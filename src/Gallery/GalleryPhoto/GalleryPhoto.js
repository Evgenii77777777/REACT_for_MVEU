import './galleryPhoto.css';

function GalleryPhoto({ photo }) {
    return (<div className='gallery-photo'>
        <div>
            <img alt={photo.service} src={photo.img} />
            <div className='gallery-photo-name'>{photo.service}</div>
        </div>
    </div>);
}

export default GalleryPhoto;