import React from 'react';
import Card from './UI/Card';
import './TableUser.css';

const TableUser = (props) => {

    return(
        <Card className='table'>
            <h2>Table User</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default TableUser;