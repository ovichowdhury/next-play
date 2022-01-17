import { useState, useRef, useEffect } from 'react'
import Joi from 'joi';
import styles from './index.module.css';

import { useValidation } from '@nahidchowdhury/realjoi';




function Test2() {
  const [name, setName] = useState("");

  const schema = Joi.string().min(3).required();

  const { ok, error } = useValidation(schema, name);

  console.log(ok, " ", error);


  const handleSubmit = (e) => {
    console.log(name);
  }

  const onFormChange = (e) => {
    setName(e.target.value);
  }


  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" onChange={onFormChange} name="name"></input>
            <label style={{ color: "red" }}>{error}</label>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button} onClick={handleSubmit}>Submit</button>
          </div>

        </form>

      </div>

    </>
  );
}

export default Test2;