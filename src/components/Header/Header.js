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
    backgroundColor: "#343434",
    color: styles.white(0.87),
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={headerStyle}>
      <span>Logo</span>
      Application
      <span>Profile?</span>
    </div>
  );
};

export default Header;