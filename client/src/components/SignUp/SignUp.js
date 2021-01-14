import React, { useState } from "react";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";


function SignUp() {

    const history = useHistory();

    const [values, setValues] = useState();
    const [error, setError] = useState();

    function handleChange(event) {
		event.persist();
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	}

    const getUserData = async () => {
        try {
            const newUser = {
                username: values.username,
                password: values.password,
                name: values.firstname + " " + values.lastname,
                email: values.email
            };
            await API.saveuser(newUser).then( res => {
                if (res.stats !== 200) {
                    API.loginUser({
                            username: newUser.username,
                            password: newUser.password,
                        })
                        .then(res => {
                            localStorage.setItem("auth-token", res.data.token)
                            // Push the entire information of the user and all its friends data
                            history.push("/")
                        })
                }
            });        
        }
        catch(err)  {
            console.log(err.response.data.msg);
            setError(err.response.data.msg);
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <h1 style={{textAlign: "center", paddingBottom: "10px"}}>Sign Up</h1>
                                    {error && (
								<>
									<div className="alert alert-danger" role="alert">
										{error}
									</div>
									<button
										type="button"
										className="close"
										data-dismiss="alert"
										aria-label="Close"
										onClick={() => setError(undefined)}
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</>
							)}
                                </div>  
                            </div>
                            <div className="row">
                                <div className="col">
                                    <form>
                                        <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="firstname">First Name:</label>
                                        <input onChange={handleChange} style={{float: ""}} type="text" id="firstname" name="firstname"></input>
                                    </form>
                                </div>
                                <div className="col">
                                    <form>
                                        <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="lastname">Last Name:</label>
                                        <input onChange={handleChange} style={{float: ""}} type="text" id="lastname" name="lastname"></input>
                                    </form>
                                </div>
                                <div className="col">
                                    <form>
                                        <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="email">Email:</label>
                                        <input onChange={handleChange} style={{float: ""}} type="email" id="email" name="email"></input>
                                    </form>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="username">Username:</label>
                                    <input onChange={handleChange} style={{float: ""}} type="text" id="username" name="username"></input>
                                </div>
                                <div className="col">
                                    <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="password">Password:</label>
                                    <input onChange={handleChange} style={{float: ""}} type="password" id="password" name="password"></input>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <button onClick={() => getUserData()}>Sign Up</button>
                        </div>
                    </div>
                    <div className="col-3">

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;