import React from "react";

import { Button } from "../Components/atoms/Button";

import { connect } from "react-redux";

import StartupActions from "../Stores/Startup/Actions";

function User(props) {

  const logOut = () => {
    props.logOut()
  };
  return (
    <div>
      <h2>User area</h2>

      <Button onClick={logOut} type="outline" className="ml-2">
        Log Out
      </Button>
    </div>
  );
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logOut: (user) => dispatch(StartupActions.logOut()),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(User);

