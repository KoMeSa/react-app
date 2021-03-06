import RUserList from '../components/RUserList';
import RButton from '../components/UI/button/RButton';
import RLoader from '../components/UI/loader/RLoader';
import UserForm from '../components/UserForm';
import UserFilter from '../components/UserFilter';
import { useState, useEffect } from 'react';
import RModal from '../components/UI/modal/RModal';
import { useUsers } from '../hooks/useUsers'
import { useFetching } from '../hooks/useFetching'
import UserService from '../API/UserService'

function User() {

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    //hook to filter users
    const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query)

    const [getUsers, isUserLoading, userError] = useFetching(async () => {
        const usersData = await UserService.getUsers();
        setUsers(usersData)
    })

    useEffect(() => {
        getUsers();
    }, [])


    const createUser = (newUser) => {
        setUsers([...users, newUser])
        setModal(false)
    }

    const removeUser = (user) => {
        setUsers(users.filter(u => u.id !== user.id))
    }

    return (
        <div>
            <RModal visible={modal} setVisible={setModal}>
                <UserForm create={createUser}></UserForm>
            </RModal>
            <div className='container'>
                <RButton onClick={() => setModal(true)}>Crete user</RButton>
                <UserFilter filter={filter} setFilter={setFilter} />
            </div>
            <div className='container'>
                {userError && <h1>${userError}</h1>}
                {isUserLoading
                    ? <RLoader />
                    : <RUserList remove={removeUser} users={sortedAndSearchedUsers}></RUserList>}
            </div>
        </div>
    );
}

export default User;
