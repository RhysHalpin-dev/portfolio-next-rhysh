import React from "react";
import styled from 'styled-components'
import { useState } from 'react';
const Contact = () => {


  return (
    <Container id='contactSection'>
      <Form name="contact" method="POST" data-netlify="true" >
        <input type="hidden" name="form-name" value="contact" />
        <h1>Get In Touch!</h1>
        <p>Any questions? Any opportunities? drop me a message below!
        </p>
        <label>Name*</label>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Rhys Halpin"
            required
          //onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <label>Email*</label>
        <div>
          <input
            type="email"
            name="email"
            placeholder="RhysHalpin@example.com"
            required
          //onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <label>Message*</label>
        <div id='textAreaDiv'>

          <textarea
            id='message'
            name='message'
            placeholder="Enter your message here :D"
            type='text'
            required>

          </textarea>
        </div>
        <input type="submit" />
      </Form>
    </Container>
  );
};

export default Contact;

const Container = styled.main`
      display: flex;
      
      justify-content: center; // horizontal
      //border: 3px solid black;
      margin-top:5rem ;
      
    `;

const Form = styled.form`
      display: flex;
      border-radius: 1rem;
      justify-content: center; // horizontal
      
      flex-direction: column;
      border: 3px solid black;
      padding: 0.5em;
      font-weight: 400;
      width:40%;
      background-color: ${({ theme }) => theme.mainBackground};
      @media (max-width: 1024px) {width: 60%;}
    @media (max-width: 768px) {width:70%;}
    @media (max-width: 640px) { width:90% }
      h1 {
        font-weight: 700;
        letter-spacing: 1.42px;
        position: relative;
        text-align: center;
        font-family: 'M PLUS Rounded 1c', sans-serif;
    
        
      }
      p {
        margin-bottom:10px;
        text-align: center;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
        display:block;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size:1.25rem ;
        line-height: 1.75rem;
        color:#cbd5e1 ;
      }
      textarea{
        margin-left:-11%;
        width: 111%;
        border-radius: 0.375rem;
        font-size:1rem;
            resize: none;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
      }
      input[type='text'] {
        width:100% ;
        border-radius: 0.375rem;
        font-size:1rem ;
        
      }
      input[type='email'] {
          width:100% ;
          border-radius: 0.375rem;
          font-size:1rem ;

      }
      input[type='submit'] {
        margin: auto;
        width:40%;
        border: 0.1em solid white;
      border-radius: 15px;
      padding: 0.35em 1.2em;
      background-color: transparent;
      color: white;
      box-sizing: border-box;
      font-size: 13px;
      letter-spacing: 1.42px;
      font-weight: 600;
      transition: all 0.2s;
    & :hover{
        color: #000000;
        background-color: #ffffff;
        cursor: pointer;
    }
      }
    `;
