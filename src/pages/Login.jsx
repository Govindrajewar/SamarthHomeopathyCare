import React from "react";
import "../style/Login.css";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/user/login", values);
      dispatch(hideLoading());

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        message.success("User logged in successfully");
        navigate("/");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <>
      <div className="form-container-login">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h3>Login Form</h3>

          <Form.Item label="Email" name="email">
            <input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" required />
          </Form.Item>

          <Link to="/register" className="ms-2">
            Not a User, Register Here
          </Link>
          <br />

          <button className="btn btn-primary">Log In</button>
        </Form>
      </div>
    </>
  );
}

export default Login;
