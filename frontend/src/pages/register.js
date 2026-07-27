import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <SignUp
        path="/register"
        routing="path"
        signInUrl="/login"
        afterSignUpUrl="/profile"
      />
    </div>
  );
};

export default Register;
