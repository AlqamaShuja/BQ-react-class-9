import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router";

const { Password } = Input;

const Login = () => {
    const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    if(values.email === 'class9@gmail.com' && values.password === "123456"){
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(values));
        navigate("/")
    }
    
  };

//   const passwordChecking = (value, password) => {
//     console.log(value, "value ", password);
//     if(password.includes("$"))

//     return Promise.resolve();
//   }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Form
        name="basic"
        //   initialValues={{ remember: true }}
        onFinish={onFinish}
        className="bg-white !p-5 rounded-lg"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              min: 5,
              max: 10,
              message: "Password must between 5 to 10 character",
            },
            // { validator: passwordChecking, message: "Abc" }
          ]}
        >
          <Password />
        </Form.Item>

        <div className="flex justify-center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
