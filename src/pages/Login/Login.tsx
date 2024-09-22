import { type FC } from "react";

import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";

import FormField from "@/components/FormField";
import Button from "@/components/Button";

const SocialButtons: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-3">
      <span className="w-11 h-11 items-center justify-center inline-flex rounded-full bg-white border border-gray-300 hover:shadow-lg cursor-pointer transition ease-in duration-300">
        <img src="/google-logo.svg" alt="Google Logo" className="w-4 h-4" />
      </span>
    </div>
  );
};

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      navigate({ to: "/" });
    },
  });

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) => !value && "An email is required",
        }}
      >
        {(field) => (
          <FormField
            label="Email"
            placeholder="mail@gmail.com"
            id={field.name}
            name={field.name}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            errors={field.state.meta.errors}
          />
        )}
      </form.Field>
      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) => !value && "A password is required",
        }}
      >
        {(field) => (
          <FormField
            type="password"
            label="Password"
            placeholder="Enter your password"
            id={field.name}
            name={field.name}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            errors={field.state.meta.errors}
          />
        )}
      </form.Field>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit || isSubmitting}>
            {isSubmitting ? "..." : "Sign in"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};

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
