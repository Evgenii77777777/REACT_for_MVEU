import Team from './Team/Team';
import Photos from './Photos/Photos';
import Reviews from './Reviews/Reviews';

function About() {
    return (<>
        <h1>Анонсы культурных событий</h1>
        <Team /> 
        <Photos />
      {/*}  <Reviews />*/}
    </>);
}

export default About;