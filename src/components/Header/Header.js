import React from "react";

const Header = ({ styles }) => {
  const headerStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.headerHeight,
    backgroundColor: "#fff",
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={headerStyle}>
      <span>{`Hi`}</span>
      Application
      <span>{`*`}</span>
    </div>
  );
};

export default Header;