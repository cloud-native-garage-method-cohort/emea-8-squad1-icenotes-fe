import React from "react";

function Header(props) {
  //const handleOnClick = () => props.setIsModalVisible(true);
  
  return (
    <header style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <h2 id="app-header">IceNotes</h2>
      <button className="logoutButton">Login</button>
    </header>
  );
}

export default Header;