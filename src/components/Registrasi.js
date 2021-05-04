import React from 'react';
import Card from './UI/Card';
import Form from './Form';
import './Registrasi.css';

const Registrasi = (props) => {

    const onSaveDataHandler = onSaveData => {
        const userData = {
            ...onSaveData,
            id: Math.random(2, 10).toString()
        };
        props.onAddUser(userData);
    }

    return(
        <Card className='users-form'>
            <h2 className="header">Register User</h2>
            <Form onSaveData={onSaveDataHandler} />
        </Card>
    );
}

export default Registrasi;