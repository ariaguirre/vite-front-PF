import styles from './button.module.css';

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Btn = ({children, buttonType, ...otherProps}) => {
  return (
    <button 
      className={`${styles.buttonContainer} ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Btn