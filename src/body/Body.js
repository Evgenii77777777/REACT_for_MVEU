import { useSelector } from 'react-redux';

function Body() {
    const selected = useSelector(state => state.prefilled.value);

    return (
        <div className="main__content">
            
        </div>
  );
}

export default Body;