import Joi from 'joi';
import React from 'react';


function ComplexValidation() {


  const post = Joi.object().keys({
    title: Joi.string().required(),
    desc: Joi.string().required()
  });

  const user = Joi.object({
    name: Joi.string().required(),
    posts: Joi.array().items(post)
  });

  const onCheckClick = (e) => {
    const userData = {
      name: 'nahid',
      posts: [
        { title: "null", desc: 'my post' },
        { title: null, desc: 'my post' },
        { title: 'my post', desc: 'my post' }
      ]
    };

    const { error, value } = user.validate(userData, {
      abortEarly: false
    });
    console.log(error.details);
  }

  return (
    <>
      <div style={styles.flexDiv}>
        <button style={styles.myButton} onClick={onCheckClick}>Check</button>
      </div>
    </>
  );
}

const styles = {
  flexDiv: {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px',
    padding: '50px',
    border: '1px solid gray'
  },
  myButton: {
    backgroundImage: 'linear-gradient(to right,cyan, white)',
    color: 'black',
    padding: '12px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    borderRadius: '15px'
  }
}

export default ComplexValidation;