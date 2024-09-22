import { type FC } from "react";

import SocialButtons from "./SocialButtons";
import LoginForm from "./LoginForm";

const Login: FC = () => {
  return (
    <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-gray-500 bg-no-repeat bg-cover relative items-center">
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome to Scaffold!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please login to your account
          </p>
        </div>
        <SocialButtons />
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-500 font-normal">OR</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
