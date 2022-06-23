import './style/App.scss';
import RUserList from './components/RUserList';
import RButton from './components/UI/button/RButton';
import UserForm from './components/UserForm';
import UserFilter from './components/UserFilter';
import { useState } from 'react';
import RModal from './components/UI/modal/RModal';
import { useUsers } from './hooks/useUsers'

function App() {

  const [users, setUsers] = useState([{ id: 1, name: 'Roman', surname: 'Bobchik' }, { id: 2, name: 'Andry', surname: 'Black' }, { id: 3, name: 'fffff', surname: 'AsAs' }])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query)

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
        <RButton onClick={()=>setModal(true)}>Crete user</RButton>
        <UserFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className='container'>
        <RUserList remove={removeUser} users={sortedAndSearchedUsers}></RUserList>
      </div>
    </div>
  );
}

export default App;
