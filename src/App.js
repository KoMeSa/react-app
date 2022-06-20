import './style/App.scss';
import RUserList from './components/UI/list/RUserList';
import UserForm from './components/UserForm';
import RSelect from './components/UI/select/RSelect';
import RInput from './components/UI/input/RInput';
import { useState } from 'react';

function App() {


  const [users, setUsers] = useState([{ id: 1, name: 'Roman', surname: 'Bobchik' }, { id: 2, name: 'Andry', surname: 'Black' }, { id: 3, name: 'fffff', surname: 'AsAs' }])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newUser) => {
    setUsers([...users, newUser])
  }

  const removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  const sortUsers = (sort) => {
    setSelectedSort(sort)
    setUsers([...users].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <div className='container'>
        <UserForm create={createPost}></UserForm>
      </div>
      <hr />
      <div className='container'>
        <RInput />
        <RSelect defaultValue='Sort by'
          value={selectedSort}
          onChange={sortUsers}
          options={[{ value: 'name', name: 'By name' }, { value: 'surname', name: 'By surname' }]}>
        </RSelect>
      </div>
      <div className='container'>
        {users.length ? <RUserList remove={removeUser} users={users}></RUserList> : <h1>We don't have users</h1>}
      </div>
    </div>
  );
}

export default App;
