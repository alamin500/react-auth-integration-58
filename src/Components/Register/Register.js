import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form action="">
        <input type="email" />
        <br />
        <input type="password" />
        <br />
        <input type="submit" value="Submit" />
        <Link to="/login">Already Registered?</Link>
      </form>
    </div>
  );
};

export default Register;
<h2>Please Register</h2>;
