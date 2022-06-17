import './style/App.scss';
import RButton from './components/UI/button/RButton';
import RInput from './components/UI/input/RInput';
import RItem from './components/UI/item/RItem';
import { useReducer, useState } from 'react';

function App() {

  const [user, setUser] = useState({ name: '', surname: '' })
  const [users, setUsers] = useState([{ name: 'Roman', surname: 'Bobchik' }, { name: 'Andry', surname: 'Black' }])

  const createUser = () => {
    console.log('User', user)
  }


  return (
    <div className="App">
      <div className='container'>
        <RInput type='text' placeholder="Name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })}></RInput>
        <RInput type='text' placeholder="Surname" value={user.surname} onChange={e => setUser({ ...user, surname: e.target.value })}></RInput>
        <RButton onClick={createUser}>Send</RButton>
      </div>
      <RItem users={users}></RItem>
    </div>
  );
}

export default App;
