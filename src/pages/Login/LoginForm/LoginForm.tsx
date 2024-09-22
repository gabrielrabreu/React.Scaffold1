import { type FC } from "react";

import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";

import FormField from "@/components/FormField";
import Button from "@/components/Button";

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
            {isSubmitting ? "..." : "Login"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};

export default LoginForm;
