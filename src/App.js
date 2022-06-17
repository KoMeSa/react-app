import './style/App.scss';
import RUserList from './components/UI/list/RUserList';
import UserForm from './components/UserForm';
import { useState } from 'react';

function App() {


  const [users, setUsers] = useState([{ id: 1, name: 'Roman', surname: 'Bobchik' }, { id: 2, name: 'Andry', surname: 'Black' }])
  const createPost = (newUser) => {
    setUsers([...users, newUser])
  }

  const removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  return (
    <div className="App">
      <div className='container'>
        <UserForm create={createPost}></UserForm>
      </div>
      <div className='container'>
        <RUserList remove={removeUser} users={users}></RUserList>
      </div>
    </div>
  );
}

export default App;
