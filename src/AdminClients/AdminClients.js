import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientsAsync } from '../api/clients';

function AdminClients() {
    const dispatch = useDispatch();
    const clients = useSelector(store => store.clients.clients);

    useEffect(() => {
        dispatch(getClientsAsync());
    }, [dispatch]);

    return (<>
        <h1>Возможные клиенты</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Имя</td>
                        <td>Почта</td>
                        <td>Телефон</td>
                    </tr>
                </thead>
                <tbody>
                    { clients.map((x, index) => 
                        <tr key={index}>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                        <   td>{x.phone}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>)
}

export default AdminClients;