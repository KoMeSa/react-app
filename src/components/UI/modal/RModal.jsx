import classes from './RModal.module.scss'

const RModal = ({ children, visible, setVisible }) => {
    const rootClasses = [classes.rModal]
    
    if(visible){
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.rModalContent}>
                {children}
            </div>
        </div>
    )
}

export default RModal;