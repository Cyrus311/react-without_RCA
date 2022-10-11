import axios from "axios";

const request = async function (options, isAuthNeeded = true) {
  //! Auth token login
  let authHeader = null;
  if (isAuthNeeded) {
    const tokenData = localStorage.getItem("token");
    const { token } = JSON.parse(tokenData);
    authHeader = token;
  }

  //! Create axios client
  const client = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      Authorization: `Bearer ${authHeader} `
    }
  });

  //! Api_Key and other constants added to request
  if (!options.params) options.params = {};
  options.params.language = "en-US";
  options.params.api_key = process.env.API_KEY;

  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    return Promise.reject(error.status_message || error.errors);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
