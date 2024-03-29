import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../SignIn";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let sighin = localStorage.getItem("userdetails");
    if (!sighin) {
      navigate("/");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
