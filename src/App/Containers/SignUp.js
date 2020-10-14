import React, { useState, useEffect } from "react";

import "../assets/styles/main.css";

import { Button } from "../Components/atoms/Button";
import { Card } from "../Components/atoms/Card";
import { Typography } from "../Components/atoms/Typography";

import { Textfield } from "../Components/atoms/Textfield";

import SocialButton from "../Components/atoms/socialLogin/";

import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

import StartupActions from "../Stores/Startup/Actions";

import {
  validateFullName,
  validatePhoneNumber,
  validatePassword,
  validateEmail,
} from "../Utils/Validations";

function SignUp(props) {
  const history = useHistory();

  let fields = [
    {
      key: "FullName",
      value: "",
      valid: null,
      validMethod: function (val) {
        this.valid = validateFullName(val);
      },
      errorMessage: "Invalid Full Name",
    },
    {
      key: "Mobile",
      value: "",
      valid: null,
      validMethod: function (val) {
        this.valid = validatePhoneNumber(val);
      },
      errorMessage: "Invalid Mobile Number",
    },
    {
      key: "Password",
      value: "",
      valid: null,
      validMethod: function (val) {
        this.valid = validatePassword(val);
      },
      errorMessage: "Invalid Password",
    },
    {
      key: "ConfirmPassword",
      value: "",
      valid: null,
      validMethod: function (val,val2) {
        this.valid = val ==  val2
      },
      errorMessage: "Password Does not match",
    },
    {
      key: "Email",
      value: "",
      valid: null,
      validMethod: function (num) {
        this.valid = validateEmail(num);
      },
      errorMessage: "Invalid email",
    },
  ];

  const [formState, setFields] = useState(fields);

  const handleSocialLogin = (user) => {};

  const handleSocialLoginFailure = (err) => {};

  const responseGoogle = (response) => {
    if (response.accessToken) {
   
      var payload = {
        idToken : response.tokenId
      }
      props.signUp(payload)
   
    } else {
      alert("login error");
    }
    console.log(response);
   
  };

  const handleChange = (id, e) => {
    formState.find((element) => {
      if (element.key === id) {
      
     
        element.value = e.target.value;

        if ( element.key == "ConfirmPassword"){
            element.validMethod(formState[2].value,e.target.value)
        } else {
          element.validMethod(e.target.value);
        }
       
        setFields([...formState]);
        console.log("state", formState);
      }
    });

    console.log(fields);
  };

  const SignUp = () => {
    formState.find((element) => {
      console.log(element)
      if (element.valid == null) {
        element.valid = false;
        setFields([...formState]);
        return;
      }
    });

    
   


    // Sign Up Manual Action
  };

  return (
    <div>
      <div className="flex justify-center p-8 md:pt-24">
        <Card type="primary" size="small">
          <Typography color="primary" type="h1" className="flex justify-center">
            Sign up form
          </Typography>

          <div className="mt-4">
            <Textfield
              type={
                formState[0].valid == null
                  ? "primary"
                  : formState[0].valid
                  ? "green"
                  : "red"
              }
              size="sm"
              label="Full Name"
              onChange={(e) => handleChange(fields[0].key, e)}
              error={
                formState[0].valid == null
                  ? null
                  : formState[0].valid
                  ? null
                  : formState[0].errorMessage
              }
              placeholder="Full Name"
            ></Textfield>
            </div>
            <div className="mt-4">
            <Textfield
              type={
                formState[1].valid == null
                  ? "primary"
                  : formState[1].valid
                  ? "green"
                  : "red"
              }
              size="sm"
              label="Mobile"
              onChange={(e) => handleChange(fields[1].key, e)}
              error={
                formState[1].valid == null
                  ? null
                  : formState[1].valid
                  ? null
                  : formState[1].errorMessage
              }
              placeholder="Mobile"
            ></Textfield>
            </div>
            <div className="mt-4">
            <Textfield
              type={
                formState[4].valid == null
                  ? "primary"
                  : formState[4].valid
                  ? "green"
                  : "red"
              }
              size="sm"
              label="Email"
              onChange={(e) => handleChange(fields[4].key, e)}
              error={
                formState[4].valid == null
                  ? null
                  : formState[4].valid
                  ? null
                  : formState[4].errorMessage
              }
              placeholder="Email"
            ></Textfield>
            </div>
            <div className="mt-4">
            <Textfield
              type={
                formState[2].valid == null
                  ? "primary"
                  : formState[2].valid
                  ? "green"
                  : "red"
              }
              size="sm"
              label="Password"
              onChange={(e) => handleChange(fields[2].key, e)}
              error={
                formState[2].valid == null
                  ? null
                  : formState[2].valid
                  ? null
                  : formState[2].errorMessage
              }
              placeholder="Password"
            ></Textfield>
            </div>
            <div className="mt-4">
            <Textfield
            type={
                formState[3].valid == null
                  ? "primary"
                  : formState[3].valid
                  ? "green"
                  : "red"
              }
              size="sm"
              label="Confirm Password"
              onChange={(e) => handleChange(fields[3].key, e)}
              error={
                formState[3].valid == null
                  ? null
                  : formState[3].valid
                  ? null
                  : formState[3].errorMessage
              }
              placeholder="Confirm Password"
            ></Textfield>
          </div>

          <div className="flex justify-between mt-4">
            <Button onClick={SignUp} type="primary">
              Sign up
            </Button>
          </div>

          <div className="text-center my-4">
            <Typography color="primary" type="body1">
              or sign up using
            </Typography>
          </div>

          <div className="flex">
            <SocialButton
              provider="facebook"
              appId="420968585473340"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              Facebook
            </SocialButton>

            <GoogleLogin
              clientId="648513583046-6ingms3kmgge2nng0tq4tfdjnn51eug2.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  type="outline"
                  className="mx-4"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Google
                </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  signUp: (token) => dispatch(StartupActions.signUpGoogle(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


