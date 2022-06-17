import classes from './RInput.module.scss'

const RInput = (props) => {
    return (
        <input className={classes.rInput} {...props} />
    )
}

export default RInput;