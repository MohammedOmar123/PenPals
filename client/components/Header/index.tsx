import React from "react";
import { observer } from "mobx-react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default observer(Header);
