import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscribersAsync } from '../api/subscribers';

function AdminSubscribers() {
    const dispatch = useDispatch();
    const subscribers = useSelector(store => store.subscribers.subscribers);

    useEffect(() => {
        dispatch(getSubscribersAsync());
    }, [dispatch]);

    return (<>
        <h1>Подписчики на новости</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Имя</td>
                        <td>Почта</td>
                    </tr>
                </thead>
                <tbody>
                    { subscribers.map((x, index) => 
                        <tr key={index}>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>)
}

export default AdminSubscribers;