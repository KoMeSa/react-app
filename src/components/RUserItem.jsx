import RButton from './UI/button/RButton';


const RUser = ({ user, remove }) => {
    return (
        <div>
            <span>{user.id}.</span>
            <span>{user.name}</span>
            <span>{user.surname}</span>
            <RButton onClick={() => { remove(user) }}>Delete a user</RButton>
        </div>
    )
}


export default RUser;