import styles from './TextInput.module.scss';

const TextInput = props => {
    return (<input className={styles.input} placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} />);
};

export default TextInput;