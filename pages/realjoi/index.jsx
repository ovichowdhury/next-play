
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import Joi, { func } from 'joi';


function initErrors(state) {
  return Object.keys(state).reduce((attrs, key) => {
    return {
      ...attrs,
      [key]: undefined
    }
  }, {});
}

function useValidation(schema, state) {
  const isFirst = useRef(true);

  const [errors, setErrors] = useState(initErrors(state));

  useEffect(() => {
    console.log(isFirst.current);
    if (!isFirst.current) {
      errors = initErrors(state);
      const { error, value } = schema.validate(state);
      error?.details.forEach(d => {
        errors[d.context.key] = d.message;
      })
      setErrors({ ...errors });

    }
    else isFirst.current = false;

  }, [state]);

  return errors;

}


function Index() {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mobile: ''
  });


  // useEffect(() => {
  //   console.log("in effect")
  // }, [name]);

  const schema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    mobile: Joi.string().min(3)
  });

  const error = useValidation(schema, formState);
  // console.log(error);

  // console.log(schema._ids._byKey.entries());


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
            <label style={{ color: "red" }}>{error['name']}</label>
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="text" onChange={onFormChange} name="email"></input>
            <label style={{ color: "red" }}>{error['email']}</label>
          </div>
          <div className={styles.formGroup}>
            <label>Mobile</label>
            <input type="text" onChange={onFormChange} name="mobile"></input>
            <label style={{ color: "red" }}>{error['mobile']}</label>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button} onClick={handleSubmit}>Submit</button>
          </div>

        </form>
        <div>
          <p>{formState['name']}</p>
        </div>
      </div>

    </>
  );
}

export default Index;
