"use client";
import dynamic from "next/dynamic";
import { Form } from "antd";
import Button from "../atoms/Button";
import { getIcon } from "../atoms/Icon";
import { useRouter } from "next/navigation";

const Input = dynamic(
  () => import("antd/es/input").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const Password = dynamic(
  () => import("antd/es/input/Password").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export interface LoginFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const onFinish = (values: LoginFormValues) => {
    console.log("Success:", values);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center h-screen bg-gray-50">
        <div className="max-w-lg w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <p className="font-bold text-2xl mb-4">Welcome Back</p>
            <p className=" text-body-xl text-gray-500">
              Please sign in to continue
            </p>
          </div>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            size="large"
            className="flex flex-col gap-2"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={getIcon("userRound")} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Password
                prefix={getIcon("lockKeyHole")}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                label="Forgot Password?"
                type="link"
                onClick={() => router.push("/forgot-password")}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                label="Sign In"
                type="primary"
                className="w-full"
                size="large"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
