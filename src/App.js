import './style/App.scss';
import RUserList from './components/UI/list/RUserList';
import UserForm from './components/UserForm';
import UserFilter from './components/UserFilter';
import { useState, useMemo } from 'react';
import RModal from './components/UI/modal/RModal';

function App() {

  const [users, setUsers] = useState([{ id: 1, name: 'Roman', surname: 'Bobchik' }, { id: 2, name: 'Andry', surname: 'Black' }, { id: 3, name: 'fffff', surname: 'AsAs' }])
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setVisibleModal] = useState(false)

  const createUser = (newUser) => {
    setUsers([...users, newUser])
  }

  const removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  const sortedUsers = useMemo(() => {
    if (filter.sort) {
      return [...users].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return users;
  }, [filter.sort, users])


  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter(user => user.name.toLowerCase().includes(filter.query))
  }, [filter.query, sortedUsers])


  return (
    <div className="App">
      <RModal visible={modal} setVisible={setVisibleModal}>
        <UserForm create={createUser}></UserForm>
      </RModal>
      <hr />
      <div className='container'>
        <UserFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className='container'>
        <RUserList remove={removeUser} users={sortedAndSearchedUsers}></RUserList>
      </div>
    </div>
  );
}

export default App;
