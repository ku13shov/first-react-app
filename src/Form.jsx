import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const Form = () => {
  const [inputColor, setInputColor] = useState('');
  const inputRef = useRef(null);

  const inputClassNames = cx(['input', `${inputColor}`]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setInputColor(inputRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label className={styles.label} htmlFor="color">Enter color name</label>
      {/* <input className={styles.input} type="text" name="color" style={{backgroundColor: inputColor}} ref={inputRef} placeholder='orange' /> */}
      <input className={inputClassNames} type="text" name="color" ref={inputRef} placeholder='red, orange or green' />
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
}

export default Form;