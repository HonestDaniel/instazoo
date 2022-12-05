import React from "react";
import Navibar from "../Components/Navibar";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
        <Navibar/>
        <Link to='/login'>LALALA</Link>
    </>
  )
};
