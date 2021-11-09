import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";


const GoogleAuth = () => {
    const responseGoogle = (response) => {
        axios.post("http://localhost:8000/api/v1/google-login", {idToken: response.tokenId})
            .then(response => console.log("GOOGLE SIGNIN SUCCESS", response))
            .catch(error => console.log("GOOGLE SIGNIN ERROR", error.response))
    }
    return (
        <div>
            <GoogleLogin
                clientId="135180937964-2fp68t0f130c0o737gfnoiqpcsqs38l8.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <button type='button' onClick={renderProps.onClick} disabled={renderProps.disabled}
                    className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                    </button>
                )}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default GoogleAuth;