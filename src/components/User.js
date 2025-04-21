import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello there");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location: Gurugram, Haryana</h3>
      <h4>Contact: @ayushi_25 </h4>
    </div>
  );
};

export default User;
