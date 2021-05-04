import React, {useState} from 'react';
import TableUser from './components/TableUser';
import Registrasi from './components/Registrasi';
import './App.css';

const userDummy = [
  {
    id: 'u1',
    email: 'pirman@mail.com',
    name: 'pirmansyah'
  },
  {
    id: 'u2',
    email: 'habib@mail.com',
    name: 'habib'
  },
  {
    id: 'u3',
    email: 'ardiet@mail.com',
    name: 'ardiet'
  }
];

const App = () => {

  const [users, setUsers] = useState(userDummy);

  const onAddUserHandler = users => {
    setUsers(prevUsers => {
        return [users, ...prevUsers]
    });
  }

  return (
    <div className="App">
        <Registrasi onAddUser={onAddUserHandler} />
        <TableUser users={users}/>
    </div>
  );
}

export default App;
