// a library to wrap and simplify api calls
import apisauce from "apisauce";
import NetworkConstants from "../Config/NetworkConstants";

// our "constructor"
const create = (baseURL = NetworkConstants.BASE_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    // 10 second timeout...
    timeout: 10000,
  });

  const googleSignIn = (obj) => {
    return api.post(
      NetworkConstants.AUTH_SERVICE +
        NetworkConstants.API +
        NetworkConstants.ACTION_GOOGLE +
        NetworkConstants.CONTROLLER_SIGNIN,
      obj
    );
  };

  const googleSignUp = (obj) => {
    return api.post(
      NetworkConstants.AUTH_SERVICE +
        NetworkConstants.API +
        NetworkConstants.ACTION_GOOGLE +
        NetworkConstants.CONTROLLER_SIGNUP,
      obj
    );
  };

  const logOutUser = () => {
    return api.get(
      NetworkConstants.AUTH_SERVICE +
        NetworkConstants.API +
        NetworkConstants.USERS +
        NetworkConstants.SIGN_OUT,{},{data:{}})};

  api.axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      console.log("conn", config);
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  const setUserIdHeader = (userId) => api.setHeader("X-User-id", userId);

  const removeUserHeader = () => api.deleteHeader("X-User-id");

  const setAuthToken = (userAuth) =>
    api.setHeader("Authorization", "Bearer " + userAuth);
  const removeAuthToken = () => api.deleteHeader("Authorization");
  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
//
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    googleSignIn,
    googleSignUp,
    setAuthToken,
    removeAuthToken,
    setUserIdHeader,
    logOutUser,
    removeUserHeader
    // a list of the API functions from step 2
  };
};

// let's return back our create method as the default.
export default {
  create,
};
