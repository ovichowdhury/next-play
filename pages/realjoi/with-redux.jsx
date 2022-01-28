import { useState, useRef, useEffect } from 'react'
import Joi from 'joi';
import styles from './index.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFormState} from '../../store/slices/login'
import { useFormValidationAsync, useFormValidation } from '@nahidchowdhury/realjoi';

function ReduxView() {
  // const username= useSelector((state) => state.login.username);
  // const password = useSelector((state) => state.login.password);
  const {username, password} = useSelector(state => state.login);

  return (
    <>
      <div className={styles.formGroup}>
        <h3>Viewer</h3>
        <h5>{username}</h5>
        <h5>{password}</h5>
      </div>
    </>
  );
}

function WithRedux() {

  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login);

  // const {username, password} = useSelector(state => state.login);

  const schema = Joi.object({
    username: Joi.string().min(3),
    password: Joi.string().min(3)
  });

  const {ok, errors} = useFormValidation(schema, loginState);

  const handleChange = (e) => {
    dispatch(setFormState({
      name: e.target.name,
      value: e.target.value
    }));
  }


  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Username</label>
            <input type="text" onChange={handleChange} name="username"></input>
            <label style={{ color: "red" }}>{errors['username']}</label>
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="text" onChange={handleChange} name="password"></input>
            <label style={{ color: "red" }}>{errors['password']}</label>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button} >Submit</button>
          </div>

          <ReduxView></ReduxView>

        </form>

      </div>
    </>
  );
}

export default WithRedux;