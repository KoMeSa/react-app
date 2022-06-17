import RButton from './UI/button/RButton';
import RInput from './UI/input/RInput';
import { useState } from 'react';



const UserForm = ({ create }) => {
    const [user, setUser] = useState({ name: '', surname: '' })

    const addUser = (e) => {
        e.preventDefault();

        const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
    }


    return (
        <form>
            <RInput type='text' placeholder="Name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })}></RInput>
            <RInput type='text' placeholder="Surname" value={user.surname} onChange={e => setUser({ ...user, surname: e.target.value })}></RInput>
            <RButton onClick={addUser}>Send</RButton>
        </form>
    )
}

export default UserForm;