import RUser from './RUserItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const RUserList = ({ users, remove }) => {

    if (!users.length) {
        return (
            <h1>No users found</h1>
        )
    }

    return (
        <div>
            <h1>List of user</h1>
            <TransitionGroup>
                {users.map(user =>
                    <CSSTransition
                        key={user.id}
                        timeout={500}
                        classNames="user"
                    >
                        <RUser remove={remove} user={user} ></RUser>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default RUserList;