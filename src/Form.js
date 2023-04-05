import { useState, useRef } from 'react';
import styles from './Form.module.css';

function Form() {
  const inputRef = useRef(null);
  const [state, setState] = useState('');

  const formSubmitHandler = function(e) {
    e.preventDefault();
    setState(inputRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label className={styles.label} htmlFor="color">Enter color name</label>
      <input className={styles.input} type="text" name="color" style={{backgroundColor: state}} ref={inputRef} placeholder='orange' />
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
}

export default Form;