import React from 'react';
import GoogleLogin from 'react-google-login';


const GoogleAuth = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div>
            <GoogleLogin
                clientId={process.env.GOOGLE_CLIENT_ID}
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