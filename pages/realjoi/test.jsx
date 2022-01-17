import { useState, useRef, useEffect } from 'react'
import Joi from 'joi';
import styles from './index.module.css';

import { useFormValidationAsync, useFormValidation } from '@nahidchowdhury/realjoi';





function Test() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  

  const schema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    mobile: Joi.string().min(3)
  });

  const {ok, errors} = useFormValidationAsync(schema, formState, {
    abortEarly: true
  });

  console.log(ok, " ", errors);


  const handleSubmit = (e) => {
    console.log(formState);
  }

  const onFormChange = (e) => {
    formState[e.target.name] = e.target.value;
    setFormState({ ...formState });
  }


  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" onChange={onFormChange} name="name"></input>
            <label style={{ color: "red" }}>{errors['name']}</label>
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="text" onChange={onFormChange} name="email"></input>
            <label style={{ color: "red" }}>{errors['email']}</label>
          </div>
          <div className={styles.formGroup}>
            <label>Mobile</label>
            <input type="text" onChange={onFormChange} name="mobile"></input>
            <label style={{ color: "red" }}>{errors['mobile']}</label>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button} onClick={handleSubmit}>Submit</button>
          </div>

        </form>

      </div>

    </>
  );
}

export default Test;