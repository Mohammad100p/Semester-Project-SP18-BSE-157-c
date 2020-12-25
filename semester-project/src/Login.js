import { Grid } from "@material-ui/core";
import React from "react";

function Login(){
    return(
        <Grid className="login">
            <Grid className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                </form>
            </Grid>
        </Grid>
    )
}

export default Login;