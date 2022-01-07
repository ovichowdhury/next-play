
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

function useValidation(schema, state, options={}) {
  const isFirst = useRef(true);

  const [ok, setOk] = useState(false);
  const [errors, setErrors] = useState(initErrors(state));

  useEffect(() => {
    // console.log(isFirst.current);
    if (!isFirst.current) {
      errors = initErrors(state);
      const { error, value } = schema.validate(state, options);
      if(error) setOk(false);
      else setOk(true);
      error?.details.forEach(d => {
        errors[d.context.key] = d.message;
      })
      setErrors({ ...errors });

    }
    else isFirst.current = false;

  }, [state]);

  return {ok, errors};

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

  const {ok, errors} = useValidation(schema, formState, {
    abortEarly: false
  });
  // console.log(ok);

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

export default Index;
