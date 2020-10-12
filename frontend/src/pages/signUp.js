import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'
import axios from 'axios'
//import userService from '../services/accounts';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: rgba(0,0,0,0.9);
    }
    .navbar-default, .collapsed {
        border-color: white;
        background-color: white;
      }
      
      .navbar-default, .toggle{
       background-color: white;
      }
    .navbar-brand, .navbar-nav .nav-link  {
        color white;
        margin: 2vh 2vw 2vh 2vw;
        &:hover {
            color: #690505;
        }
    }
    .nav-item {
      color white;
      margin: 2vh 2vw 2vh 2vw;
    }
    .navbar-light .navbar-brand {
      color: white;
    }
    `

// Function to validate if input is acceptable
const formValid = ({ formErrors, ...rest }) => {
  let valid = true

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false)
  })

  // Validate form if it isn't filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false)
  })

  return valid
}

// An email validation code
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

export class SignUp extends Component {
  constructor(props) {
    super(props)

    // The state of the form to begin with
    this.state = {
      //users: userArray,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // The submit handler
  handleSubmit = (event) => {
    event.preventDefault()

    // If the format is valid print this to Console
    if (formValid(this.state)) {
      /*const { users } = this.state;
      this.setState({
        users: [...users]
      });
      users.push({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      });*/

      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }

      axios
        .post('https://cryptic-thicket-50918.herokuapp.com/user/signup', newUser)
        .then((res) => {
          if (res.status === 201) {
            window.location = '/Newsy/#/signin'
          } else {
            window.location = '/Newsy/#/signup'
          }
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
          confirmAlert({
            title: 'Error',
            message: 'Failed to signup. Please try again',
            buttons: [
              {
                label: 'Ok',
              },
            ],
          })
        })
      console.log(this.state)
    } else {
      confirmAlert({
        title: 'Error',
        message: 'Failed to signup. Please try again',
        buttons: [
          {
            label: 'Ok',
          },
        ],
      })
    }
  }

  // The Change handler
  handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    let formErrors = this.state.formErrors

    // Swith statement for form input rules
    switch (name) {
      case 'firstName':
        formErrors.firstName =
          value.length < 2 ? 'minimum 2 characters required' : ''
        break

      case 'lastName':
        formErrors.lastName =
          value.length < 2 ? 'minimum 2 characters required' : ''
        break

      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invald email address'
        break

      case 'password':
        formErrors.password =
          value.length < 6 ? 'minimum 6 characters required' : ''
        break
      default:
        break
    }

    this.setState({
      formErrors,
      [name]: value,
    }) /*, () => console.log(this.state));*/
  }

  render() {
    // Initializing formErrors property for it to be able to be used
    const { firstName, lastName, email, password, formErrors } = this.state
    //const { users } = this.state;

    return (
      <Styles>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 1250 }}
        >
          {(props) => (
            <div style={props} className="wrapper">
              <div className="form-wrapper">
                <h1>Create Account</h1>
                <form
                  action="/signup"
                  className="forms"
                  onSubmit={this.handleSubmit}
                >
                  <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className={
                        formErrors.firstName.length > 0 ? 'error' : null
                      }
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className={
                        formErrors.lastName.length > 0 ? 'error' : null
                      }
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={this.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.lastName}
                      </span>
                    )}
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      className={formErrors.email.length > 0 ? 'error' : null}
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                      className={
                        formErrors.password.length > 0 ? 'error' : null
                      }
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.password}
                      </span>
                    )}
                  </div>
                  <div className="createAccount">
                    <button type="submit">Create Account</button>
                    <a href="#/signin">
                      <small>Already Have an Account?</small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Spring>
      </Styles>
    )
  }
}
