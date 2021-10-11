import React from "react";
import useAuth from "../../Hook/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This is jome</h1>
      <h5>User: {user.displayName}</h5>
    </div>
  );
};

export default Home;
