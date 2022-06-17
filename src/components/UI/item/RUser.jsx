import classes from './RItem.module.scss'


const RUser = (props) => {
    return (
        <div className={classes.rItem}>
            <span>{props.user.id}.</span>
            <span>{props.user.name}</span>
            <span>{props.user.surname}</span>
        </div>
    )
}


export default RUser;