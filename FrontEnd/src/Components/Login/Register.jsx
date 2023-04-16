import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function signIn() {
  var signin = document.getElementsByClassName('signin');
  signin[0].style.display = "block";
  var signup = document.getElementsByClassName('signup');
  signup[0].style.display = "none";
  var signinbtn = document.getElementsByClassName('signin-btn');
  signinbtn[0].classList.add('btn-light');
  signinbtn[0].classList.remove('btn-danger');
  var signupbtn = document.getElementsByClassName('signup-btn');
  signupbtn[0].classList.add('btn-danger');
  signupbtn[0].classList.remove('btn-light');
}
function signUp() {
  var signin = document.getElementsByClassName('signin');
  signin[0].style.display = "none";
  var signup = document.getElementsByClassName('signup');
  signup[0].style.display = "block";
  var signinbtn = document.getElementsByClassName('signin-btn');
  signinbtn[0].classList.add('btn-danger');
  signinbtn[0].classList.remove('btn-light');
  var signupbtn = document.getElementsByClassName('signup-btn');
  signupbtn[0].classList.add('btn-light');
  signupbtn[0].classList.remove('btn-danger');
}


function Register() {
  const [newRegister, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    isStudent: false
  });

  const [newLogin, setLogin] = useState({
    email: '',
    password: ''
  });

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [isStudent, setStudent] = useState(false);
  const handleSubmitSignUp = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password went wrong!',
      })
    } else {
      axios.post('http://localhost:5000/register', { name, email, password, age, isStudent })
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Sign-Up Succesful',
            text: 'Now go to sign-in page',
            showConfirmButton: true,
            confirmButtonColor: "#db334f"
          })

        })
        .catch((err) => {
          console.log(err.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data
          })
        });

      setRegister({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        isStudent: false
      });
    }

  }

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    console.log("logged in");

    axios.post('http://localhost:5000/login', { email, password })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Log-In Succesful',
          text: 'Now go to Home page',
          showConfirmButton: true,
          confirmButtonColor: "#db334f"
        })
        Object.keys(res.data).forEach(item => localStorage.setItem(item, res.data[item]));
        window.location = "/";
      }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
  }



  return <div className="login-container">
    <button type="button" className="btn btn-lg btn-danger mobilebutton signup-btn " onClick={signIn}>Sign In</button>
    <button type="button" className="btn btn-lg btn-light mobilebutton signin-btn" onClick={signUp}>Sign Up</button>
    <div className="upload-form signup fade-in">
      <h2 className="login-heading">Don't have an account?</h2>
      <img className="circle-sign" src="images/signup.jpg" />
      <form encType="multipart/form-data" onSubmit={handleSubmitSignUp}>
        <div class="input-div">
          <label for="name">Name &emsp;&emsp;&emsp;&emsp;&emsp;</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            autoComplete="off"
            required
          />
        </div>
        <div class="input-div">
          <label for="email">Email Id &emsp;&emsp;&emsp;&ensp;</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            autoComplete="off"
            required
          />
        </div>
        <div class="input-div">
          <label for="password">Password&emsp;&emsp;&emsp;&ensp;</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
            autoComplete="off"
            required
          />
        </div>
        <div class="input-div">
          <label for="password">Confirm Password</label>
          <input
            type="password"
            id="ConfirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => {
              setCPassword(e.target.value)
            }}
            value={cPassword}
            autoComplete="off"
            required
          />
        </div>
        <div class="input-div">
          <label for="age">Age &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;</label>
          <input
            type="number"
            id="age"
            placeholder="Age"
            name="age"
            onChange={(e) => {
              setAge(e.target.value)
            }}
            value={age}
            autoComplete="off"
            required
          />
        </div>
        <div class="input-div">
          <input
            type="checkbox"
            id="isStudent"
            name="isStudent"
            checked={isStudent}
            onChange={(initialState) => {
              setStudent(!initialState.isStudent)
            }}
          />
          <label for="isStudent"> Student</label>
        </div>
        <div>
          <button
            type="submit"
            class=" btn btn-lg btn-danger button-none mobilebutton"
          // onSubmit={handleSubmitSignUp}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="upload-form signin fade-in">
      <h2 className="login-heading">Already have an account?</h2>
      <img className="circle-sign" src="images/signin.jpg" />
      <form encType="multipart/form-data" onSubmit={handleSubmitSignIn}>
        <div class="input-div">
          <label for="name">Email Id</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            autoComplete="off"
            required
          />
        </div>
        <div class="input-div">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class=" btn btn-lg btn-danger button-none mobilebutton"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default Register;