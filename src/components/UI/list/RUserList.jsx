import classes from './RList.module.scss'
import RUser from '../item/RUser'


const RUserList = ({ users, remove }) => {
    return (
        <div className={classes.list}>
            <h1>List of user</h1>
            {users.map(user => <RUser remove={remove} key={user.id} user={user} ></RUser>)}
        </div>
    )
}

export default RUserList;