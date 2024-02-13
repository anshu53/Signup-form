import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    name: "",
    email: "",
    date: "",
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

    const { name, date, email, password } = inputvalue;
    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter a valid email address");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length should be greater than 5");
    } else {
      console.log("data has added");

      localStorage.setItem(
        "userdetails",
        JSON.stringify([...data, inputvalue])
      );
      navigate("/details");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section>
          <div className="data">
            <h3 className="text-center col-lg-4 mb-3">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  onChange={getdata}
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  onChange={getdata}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control onChange={getdata} type="date" name="date" />
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
            <p className="mt-3 ">
              Already Have an Account{" "}
              <span>
                <NavLink to="/signin">SignIn</NavLink>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
