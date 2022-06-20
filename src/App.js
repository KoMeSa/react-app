import './style/App.scss';
import RUserList from './components/UI/list/RUserList';
import UserForm from './components/UserForm';
import RSelect from './components/UI/select/RSelect';
import RInput from './components/UI/input/RInput';
import { useState, useMemo } from 'react';

function App() {


  const [users, setUsers] = useState([{ id: 1, name: 'Roman', surname: 'Bobchik' }, { id: 2, name: 'Andry', surname: 'Black' }, { id: 3, name: 'fffff', surname: 'AsAs' }])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const createUser = (newUser) => {
    setUsers([...users, newUser])
  }

  const removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  const sortedUsers = useMemo(() => {
    if (selectedSort) {
      return [...users].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return users;
  }, [selectedSort, users])


  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter(user => user.name.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedUsers])


  const sortUsers = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <div className='container'>
        <UserForm create={createUser}></UserForm>
      </div>
      <hr />
      <div className='container'>
        <RInput value={searchQuery} placeholder='search' onChange={e => setSearchQuery(e.target.value)} />
        {searchQuery}
        <RSelect defaultValue='Sort by'
          value={selectedSort}
          onChange={sortUsers}
          options={[{ value: 'name', name: 'By name' }, { value: 'surname', name: 'By surname' }]}>
        </RSelect>
      </div>
      <div className='container'>
        {sortedAndSearchedUsers.length ? <RUserList remove={removeUser} users={sortedAndSearchedUsers}></RUserList> : <h1>We don't have users</h1>}
      </div>
    </div>
  );
}

export default App;
