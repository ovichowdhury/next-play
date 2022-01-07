
import React from 'react';
import styles from './form.module.css';



function Form() {

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className={styles.buttonContainer}> 
            <button type="button" className={styles.button}>Submit</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default Form;
