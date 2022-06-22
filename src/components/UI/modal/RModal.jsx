import classes from './RModal.module.scss'

const RModal = ({ children, visible, setVisible }) => {
    const rootClasses = [classes.rModal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.rModalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default RModal;