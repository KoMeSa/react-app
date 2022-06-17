import classes from './RItem.module.scss'
import RButton from '../button/RButton';


const RUser = ({ user, remove }) => {
    return (
        <div className={classes.rItem}>
            <span>{user.id}.</span>
            <span>{user.name}</span>
            <span>{user.surname}</span>
            <RButton onClick={() => { remove(user) }}>Delete a user</RButton>
        </div>
    )
}


export default RUser;