import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <p>This is the class 07 and we make routing today!!!!</p>
      <Outlet />
    </div>
  );
};

export default About;
