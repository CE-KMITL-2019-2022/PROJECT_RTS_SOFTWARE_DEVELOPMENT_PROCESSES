import React, { useState } from 'react'
import axios from 'axios'
import validation from "./validation"
import firebase from '../../../firebase'
import PropTypes from 'prop-types'
import '../SignUp/TrainSignup.css';
const db = firebase.firestore();
function TrainSignup() {
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        repeat_password: "",
        tel: "",
        DOB: "",
        email: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(validation(values));

        // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwZnikVYpl2Rh8xMOSSIqO0HLXKaoxoOI',{
        //                 "email": Email,
        //                 "password": Password,
        //                 "returnSecureToken": true
        //                 })
        //                  .then(response => {console.log(response)})
        //                  .catch(error => {console.log(error)})

        axios.post('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users',{
            "Firstname": values.fname,
            "Lastname": values.lname,
            "Username": values.username,
            "Password": values.password,
            "Tel": values.tel,
            "DOB": values.DOB,
            "Email": values.email
          })
           .then(response => {console.log(response)})
           .catch(error => {console.log(error)}) 
    }

    return (
        <form>



            <div className="register_class" >
                <div className="Title"><h1 align="center">REGISTRATION</h1></div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>First Name</h2></span>
                    <input 
                        className="inputbox" 
                        type="text" 
                        name="fname"
                        maxLength="30" 
                        placeholder="Input your First Name" 
                        required
                        value = {values.fname} 
                        onChange={handleChange} 
                         
                    />
                    {errors.fname && <p className="error">{errors.fname}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Last Name</h2></span>
                    <input 
                        className="inputbox" 
                        type="text" 
                        name="lname"
                        maxLength="30" 
                        placeholder="Input your Last Name" 
                        required
                        value = {values.lname} 
                        onChange={handleChange} />
                    {errors.lname && <p className="error">{errors.lname}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Username</h2></span>
                    <input 
                        className="inputbox" 
                        type="text" 
                        name="username" 
                        maxLength="20" 
                        placeholder="Input your User" 
                        required
                        value = {values.username}
                        onChange={handleChange} 
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Password</h2></span>
                    <input 
                        className="inputbox" 
                        type="text" 
                        name="password" 
                        placeholder="Input your Password" 
                        required
                        value = {values.password}
                        onChange={handleChange} 
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Repeat Password</h2></span>
                    <input 
                        className="inputbox" 
                        type="text" 
                        name="repeat_password" 
                        placeholder="Repeat Password" 
                        required
                        value = {values.repeat_password} 
                        onChange={handleChange} 
                    />
                    {errors.repeat_password && <p className="error">{errors.repeat_password}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Telephone</h2></span>
                    <input 
                        className="inputbox" 
                        type="text" 
                        name="tel" 
                        maxLength="10" 
                        placeholder="Input your Telephone" 
                        required
                        value = {values.tel}
                        onChange={handleChange} 
                    />
                    {errors.tel && <p className="error">{errors.tel}</p>}
                    
                </div>

                <div className="input-box" align="center">
                    <span className="details"><h2>DOB</h2></span>
                    <input 
                        className="inputbox" 
                        type="date" 
                        data-date-inline-picker="true" 
                        name="DOB" min="1900-01-01" 
                        max="2009-12-31" 
                        placeholder="dd-mm-yyyy" 
                        required
                        value={values.DOB}
                        onChange={handleChange} 
                    />
                    {errors.DOB && <p className="error">{errors.DOB}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details"><h2>Email</h2></span>
                    <input 
                        className="inputbox" 
                        type="text" 
                        name="email" 
                        placeholder="Input your Email" 
                        required
                        value = {values.email} 
                        onChange={handleChange} 
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>


                <div className="input-box" align="center">
                    <label className="container">Male
                        <input type="checkbox"  onChange={() => { }} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Female
                        <input type="checkbox"  onChange={() => { }} />
                        <span className="checkmark"></span>
                    </label>
                </div>


                <div className="button" align="center">
                    <input type="submit" value="Register" onClick={handleSubmit} />
                    <input type="reset" value="Clear" />
                </div>

                <h2>Starting Date</h2>
                <section>
                    <fieldset>
                        <legend>TrainSignup.js</legend>
                        <div className="field moveindate">
                            <label>Date</label>
                            <input className="datepicker" name="date" type="text" autofocuss="10" />
                        </div>
                    </fieldset>
                </section>


            </div>
        </form>

    )

}


export default TrainSignup;
