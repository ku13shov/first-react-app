import { useState, useRef } from 'react';
import styles from './Form.module.css';

function Form() {
  const [inputColor, setInputColor] = useState('');
  const inputRef = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setInputColor(inputRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label className={styles.label} htmlFor="color">Enter color name</label>
      <input className={styles.input} type="text" name="color" style={{backgroundColor: inputColor}} ref={inputRef} placeholder='orange' />
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
}

export default Form;