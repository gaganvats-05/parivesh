import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    const LoginButton = () => <button onClick={() => loginWithRedirect()}>Log In</button>;
    const LogoutButton = () => <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>

    return (
        <>
            {isAuthenticated ? <LoginButton /> : <LogoutButton />}
        </>
    )
};

export default Auth;
