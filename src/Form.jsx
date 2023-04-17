import { useState, useRef } from 'react';
import classNames from 'classnames';
import './Form.css';

const Form = () => {
  const [inputColor, setInputColor] = useState('');
  const inputRef = useRef(null);

  const classNamesArray = ['input'];

  if (inputColor === 'red') {
    classNamesArray.push('red');
  }

  if (inputColor === 'orange') {
    classNamesArray.push('orange');
  }

  const inputClasses = classNames(classNamesArray);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setInputColor(inputRef.current.value);
  }

  return (
    <form className='form' onSubmit={formSubmitHandler}>
      <label className='label' htmlFor="color">Enter color name</label>
      {/* <input className={styles.input} type="text" name="color" style={{backgroundColor: inputColor}} ref={inputRef} placeholder='orange' /> */}
      <input className={inputClasses} type="text" name="color" ref={inputRef} placeholder='orange' />
      <button className='button' type="submit">Submit</button>
    </form>
  );
}

export default Form;