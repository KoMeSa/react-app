import './style/App.scss';
import RUserList from './components/RUserList';
import RButton from './components/UI/button/RButton';
import UserForm from './components/UserForm';
import UserFilter from './components/UserFilter';
import { useState, useEffect } from 'react';
import RModal from './components/UI/modal/RModal';
import { useUsers } from './hooks/useUsers'
import UserService from './API/UserService'
// import axios from 'axios'

function App() {

  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  //hook to filter users
  const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query)

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const data = await UserService.getUsers();
    setUsers(data)
  }


  const createUser = (newUser) => {
    setUsers([...users, newUser])
    setModal(false)
  }

  const removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  return (
    <div className="App">
      <RModal visible={modal} setVisible={setModal}>
        <UserForm create={createUser}></UserForm>
      </RModal>
      <hr />
      <div className='container'>
        <RButton onClick={() => setModal(true)}>Crete user</RButton>
        <UserFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className='container'>
        <RUserList remove={removeUser} users={sortedAndSearchedUsers}></RUserList>
      </div>
    </div>
  );
}

export default App;
