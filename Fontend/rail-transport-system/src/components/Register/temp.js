{/* <div className="Body_Regis" style={{marginTop :"50px"}}>
                <title>Slide Navbar</title>

            <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
            <div className="Card-Regis" src="images/New_login/552721.jpg">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <Alert show={show} variant="danger">
              <Alert.Heading>Warning</Alert.Heading>
              <p>
                Are you sure to cancel the registration?
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => {setShow(false); setValues({
                                                                    fname: "",
                                                                    lname: "",
                                                                    username: "",
                                                                    password: "",
                                                                    repeat_password: "",
                                                                    tel: "",
                                                                    DOB: "",
                                                                    email: "",
                                                                    sex: "", });}} variant="outline-danger">
                  Yes
                </Button>
                <Button onClick={() => setShow(false)} variant="outline-danger">
                  No
                </Button>
              </div>
            </Alert>
            <div className="signup">
                <form onSubmit={sendEmail}>
                <br></br>
                <br></br>
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <div className="Name-User" id="left">
                <br></br>
                <br></br>
                    <center><img className="sealImage" alt="Image of Seal" src="images/LOGO.png" width={70} marginTop ={20}/></center>
                    <input
                        className="inputlogin"  
                        id="fn" 
                        type="text" 
                        name="fname" 
                        placeholder="First name" 
                        required
                        value={values.fname}
                        onChange={handleChange} 
                    />
                    {errors.fname && <p className="error">{errors.fname}</p>}
                    
                    <input
                        className="inputlogin"  
                        id="ln" 
                        type="text" 
                        name="lname" 
                        placeholder="Last name" 
                        required
                        value={values.lname}
                        onChange={handleChange} 
                    />
                    {errors.lname && <p className="error">{errors.lname}</p>}
                    <input type="checkbox" check = {true} />
                    <input type="checkbox" /> 
                    <Form.Check
                        inline
                        label="Male"
                        type="radio" 
                        name="sex" 
                        id="Radios1" 
                        value="Male" 
                        onChange={handleRadio}
                        
                    />
                    <Form.Check
                        inline
                        label="Female"
                        type="radio" 
                        name="sex" 
                        id="Radios2" 
                        value="Female"
                        onChange={handleRadio}
                    />
                    {errors.sex && <p className="error">{errors.sex}</p>}
                </div>
            
                <div className="Info-User" id="right">

                    <input
                        className="inputlogin"  
                        type="text" 
                        name="username" 
                        placeholder="User name" 
                        required 
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
    
                    <input
                        className="inputlogin"  
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                
                    <input
                        className="inputlogin"  
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <input
                        className="inputlogin"  
                        type="password" 
                        name="repeat_password" 
                        placeholder="RE- Password" 
                        required
                        value={values.repeat_password}
                        onChange={handleChange}
                    />
                    {errors.repeat_password && <p className="error">{errors.repeat_password}</p>}

                    <input
                        className="inputlogin"  
                        type="Telephone" 
                        name="tel" 
                        placeholder="Tel" 
                        maxlength="10"
                        required
                        value={values.tel}
                        onChange={handleChange}
                    />
                    {errors.tel && <p className="error">{errors.tel}</p>}

                    <input 
                        className="inputlogin" 
                        type="date" 
                        data-date-inline-picker="true" 
                        name="DOB" min="1900-01-01" 
                        max="2009-12-31" 
                        placeholder="dd-mm-yyyy" 
                        required 
                        value={values.DOB} 
                        onChange={handleChange} />
                    {errors.DOB && <p className="error">{errors.DOB}</p>}

                    <input className="inputlogin"
                            name ="confirmcode"
                            defaultValue={values.confirmationCode}
                            type = "hidden"/>

                </div>


                <div id="right">
                <Button className="buttonlogin" type="submit" value="Submit" onClick={handleSubmits}> Sign Up </Button>
                <Button className="buttonlogin" variant="outline-danger"onClick={() => setShow(true)} >Cancel</Button>
                </div>
                </form>
                
            </div>
            <div className="login">
                <form>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input

                    className="inputlogin"  
                    type="email" 
                    name="login_username" 
                    placeholder="User Name" 
                    required
                    value={values.login_username}
                    onChange={handleChange} 
                />
                {login_errors.login_username && <p className="error">{login_errors.login_username}</p>}

                <input
                    className="inputlogin"  
                    type="password" 
                    name="login_password" 
                    placeholder="Password" 
                    required
                    value={values.login_password}
                    onChange={handleChange} 
                />
                {login_errors.login_password && <p className="error">{login_errors.login_password}</p>}

                <button onClick={handleLogin} >Login</button>
                
                </form>
                </div>
            </div>
        </div> */}