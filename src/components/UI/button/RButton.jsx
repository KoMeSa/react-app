import classes from './RButton.module.scss'

const RButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.rButton}> {children} </button>
    )
}

export default RButton;