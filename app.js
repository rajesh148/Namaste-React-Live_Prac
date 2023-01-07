import React from "react";
import ReactDOM from "react-dom/client";

const userIconUrl =
  "https://cdn1.iconfinder.com/data/icons/map-navigation-filled-line/64/map_location_pin_user_profile-512.png";

const logoURL =
  "https://cdn.sanity.io/images/92ui5egz/production/7c1c60e9afaaaa3cce61e5101717796d21b7f914-1426x1080.svg?rect=0,141,1426,799&w=150&h=84&fit=crop&auto=format";
const Title = () => {
  return (
    <h2 className="title" key="h2">
      This is a title
    </h2>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoURL} alt="image" width="30px" />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="password" />
    </div>
  );
};

const UserIcon = () => {
  return (
    <div className="userIcon">
      <img src={userIconUrl} alt="User" width="70px" />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div id="container">
      <Title />
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
