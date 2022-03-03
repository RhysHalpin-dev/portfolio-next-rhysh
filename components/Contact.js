import React from "react";
import styled from 'styled-components'
import { useState } from 'react';
const Contact = () => {




    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');


    return (
        <LoginContainer>
            <LoginForm >
                <h1>Get In Touch!</h1>
                <p>Any questions? Any opportunities? drop me a message using the form below.
                    <br /> my inbox is always open!
                </p>
                <div>
                    <label>Name*</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your name"
                        required
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email*</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div id='textAreaDiv'>
                    <label>Message*</label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder="Enter your message here :D"
                        type='text'
                        required>

                    </textarea>
                </div>
                <input type="submit" />
            </LoginForm>
        </LoginContainer>
    );
};

export default Contact;

const LoginContainer = styled.main`
      display: flex;
      align-items: center; // vertical
      justify-content: center; // horizontal
      border: 3px solid black;
      height: 90vh;
    `;

const LoginForm = styled.form`
      display: flex;
      border-radius: 1rem;
      justify-content: center; // horizontal
      flex-direction: column;
      border: 3px solid black;
      padding: 0.5em;
      font-weight: 500;
      align-items: center; // vertical
      background-color: ${({ theme }) => theme.mainBackground};
      h1 {
        font-weight: 800;
        letter-spacing: 1.42px;
        position: relative;
        text-align: center;
    
        margin-left: 5px;
      }
      p {
        margin-bottom:10px;
        text-align: center;
      }
    
      div {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;

      }
      #textAreaDiv{
          margin-left: 10%;
          width: 90%;
        -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
      }
      label {
        flex-basis: 130px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
      textarea{
          width: 100%;
          -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
      }
      input[type='text'] {

      }
      input[type='email'] {

      }
      input[type='submit'] {
        border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 25px 80px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    border: 3px solid #fff;
    & :hover{
        border: 3px solid #fff;
        color: black;
        background-color: ${({ theme }) => theme.text};
    }
      }
    `;

/*const ContactForm = (
    <Form name='contact-form' method='POST'>
        <Title>Contact me!</Title>
        <label htmlFor='name'> Name *</label>
        <label htmlFor='message'>Message *</label>
        <div>

            <input
                id='name'
                name='name'
                required
                type='text'
            />

            <label htmlFor='email'>Email *</label>
            <input
                id='email'
                name='email'
                type='email'
                required
            />
        </div>

        <textarea
            id='message'
            name='message'
            type='text'
            required>

        </textarea>

        <button type='submit' value='Login'>Submit</button>

    </Form>
);


return (<Container id='contactSection'>


    {ContactForm}

</Container>)
}

export default Contact;

const Container = styled.section`
text-align: center;
width: 100%;
height: 100vh;
border: solid white 3px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.42px;
color: ${({ theme }) => theme.text};

`*/

/*const ContactSec = styled.div`
    border: solid white 3px;
    padding: 10rem;
    padding-left: 26rem;
    padding-right: 27rem;
    border-radius: 1rem;
    
`*/

/*const Title = styled.h1`
    font-size: 3em;


`

const Form = styled.form`
    border: 3px solid ${({ theme }) => theme.text};;
    background-color: ${({ theme }) => theme.mainBackground};
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    div{
        display: flex;
        flex-direction: row;
        margin: 0;
    }
    
    & label {
        margin-right: auto;
        padding-left: 1%;
        font-weight: 900;
    }
  
  input[type='text'] {
        padding: 10px;
        font-size: 1em;
        background-color: blueviolet;
        color: white;
    }
  input[type='email']{
    padding: 10px;
        font-size: 1em;
        background-color: blueviolet;
        color: white;
  }
  input[type='messagee'] {
        padding: 10px;
        font-size: 1em;
        background-color: blueviolet;
        color: white;
    }
    input[type='submit'] {
        padding: 10px;
        font-size: 1em;
        background-color: blueviolet;
        color: white;
    }


`*/