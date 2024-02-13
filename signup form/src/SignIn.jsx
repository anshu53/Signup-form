import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { json, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  //   console.log(inputvalue);

  const getdata = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value, name);
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // console.log(inputvalue);

    const getuser = localStorage.getItem("userdetails");

    const { email, password } = inputvalue;
    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter a valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length should be greater than 5");
    } else {
      if (getuser && getuser.length) {
        const getuserdata = JSON.parse(getuser);
        const userlogin = getuserdata.filter((elem, index) => {
          return elem.email === email && elem.password === password;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user logged in succesfuly");
          navigate("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section>
          <div className="data">
            <h3 className="text-center col-lg-4 mb-3">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  onChange={getdata}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-4"
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={getdata}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-4"
                style={{ background: "green" }}
                type="submit"
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
