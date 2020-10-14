import React ,{useEffect}from "react";
import { connect } from "react-redux";
import Routes from "./Routes/index";
import StartupActions from "./Stores/Startup/Actions";


function Root(props) {


  useEffect(() => {
    props.loadData()
  });

  return <Routes />;
}

const mapStateToProps = (state) => ({
  role: state.startup.role,
  isAuthenticated: state.startup.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  loadData : () => dispatch(StartupActions.loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);


