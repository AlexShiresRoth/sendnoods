import React from "react";

import "../css/main.css";

const Loader = () => {
  const styles = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  const imgStyles = {
    height: "10rem",
    width: "10rem"
  };
  return (
    <div className="loader__container" style={styles}>
      <h2>Finding noodle spots...</h2>
      <figure>
        <img
          src={require("../images/ramen.png")}
          alt="ramen logo"
          styles={imgStyles}
        />
      </figure>
    </div>
  );
};

export default Loader;
