import React, {useState} from 'react';
import './Form.css';

const Form = (props) => {

    const [enteredEmail, setEmail] = useState('');
    const [enteredName, setName] = useState('');

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    const handleName = event => {
        setName(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const userData = {
            email: enteredEmail,
            name: enteredName
        }

        props.onSaveData(userData);
        setEmail('');
        setName('');
    }

    return(
        <form className='form' onSubmit={handleSubmit} autoComplete="off">
            <input 
                type="email" 
                name="email" 
                placeholder="Email"
                value={enteredEmail}
                onChange={handleEmail}
                required
            />
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={enteredName}
                onChange={handleName}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default Form;