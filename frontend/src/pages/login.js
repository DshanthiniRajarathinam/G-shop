import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/register"
        afterSignInUrl="/profile"
      />
    </div>
  );
};

export default Login;
