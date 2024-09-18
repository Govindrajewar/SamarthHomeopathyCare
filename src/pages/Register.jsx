import React from "react";
import "../style/Register.css";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const response = await axios.post("/user/register", values);
      if (response.data.success) {
        message.success("User registered successfully");
        navigate("/login");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h3>Register Form</h3>

          <Form.Item label="Name" name="name">
            <input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" required />
          </Form.Item>

          <Link to="/login" className="ms-2">
            Already User Login Here
          </Link>
          <br />

          <button className="btn btn-primary">Register</button>
        </Form>
      </div>
    </>
  );
}

export default Register;
