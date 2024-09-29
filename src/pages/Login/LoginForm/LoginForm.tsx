import { type FC } from "react";
import { toast } from "react-toastify";

import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";

import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";

import { login } from "@/services/api/auth.service";

import { type LoginBody } from "@/types/auth";

export const TEST_IDS = {
  submitButton: "login-form-submit-button",
  emailLabel: "login-form-email-label",
  emailInput: "login-form-email-input",
  emailErrors: "login-form-email-errors",
  passwordLabel: "login-form-password-label",
  passwordInput: "login-form-password-input",
  passwordErrors: "login-form-password-errors",
};

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const form = useForm<LoginBody>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await login(value)
        .then((data) => {
          console.log(data);
          navigate({ to: "/" });
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.message);
        });
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
          <div className="content-center">
            <Label data-testid={TEST_IDS.emailLabel} htmlFor={field.name}>
              Email
            </Label>
            <Input
              data-testid={TEST_IDS.emailInput}
              type="email"
              placeholder="mail@gmail.com"
              id={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.length > 0 && (
              <em
                className="mt-2 text-sm text-red-600 dark:text-red-500"
                data-testid={TEST_IDS.emailErrors}
                role="alert"
              >
                {field.state.meta.errors.join(", ")}
              </em>
            )}
          </div>
        )}
      </form.Field>
      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) => !value && "A password is required",
        }}
      >
        {(field) => (
          <div className="content-center">
            <Label data-testid={TEST_IDS.passwordLabel} htmlFor={field.name}>
              Password
            </Label>
            <Input
              data-testid={TEST_IDS.passwordInput}
              type="password"
              placeholder="Enter your password"
              id={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.length > 0 && (
              <em
                className="mt-2 text-sm text-red-600 dark:text-red-500"
                data-testid={TEST_IDS.passwordErrors}
                role="alert"
              >
                {field.state.meta.errors.join(", ")}
              </em>
            )}
          </div>
        )}
      </form.Field>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            data-testid={TEST_IDS.submitButton}
          >
            {isSubmitting ? "..." : "Login"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};

export default LoginForm;
