import React, { useEffect } from "react";
import { message } from "antd";
import axios from "axios";

function HomePage() {
  const getUserData = async () => {
    try {
      const response = await axios.post(
        "/user/getUserData",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("User data:", response.data);
    } catch (error) {
      message.error("Failed to fetch user data.");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      HomePage Page
    </div>
  )
}

export default HomePage;
