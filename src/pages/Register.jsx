// React
import { useEffect } from "react";

// rrd imports
import { Form, Link, useActionData } from "react-router-dom";

// Register hook
import { useRegister } from "../hooks/useRegister";

// Components
import { FormInput } from "../components";

// React icons
import { FcGoogle } from "react-icons/fc";

// Toast
import { toast } from "sonner";

// Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const displayName = formData.get("full-name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (password === confirmPassword) {
    return { displayName, email, password, confirmPassword };
  } else {
    toast.error("Please enter matching passwords");
    return null;
  }
};

function Register() {
  const { registerWithGoggle, registerWithEmail } = useRegister();
  const inputData = useActionData();

  useEffect(() => {
    if (inputData) {
      const { displayName, email, password } = inputData;

      registerWithEmail(displayName, email, password);
    }
  }, [inputData]);

  return (
    <div className="flex min-h-screen w-full">
      <div className="auth-bg-image hidden w-[40%] md:block"></div>
      <div className="auth-bg-image flex w-full items-center justify-center bg-black/50 bg-blend-darken md:w-[60%] md:bg-black/0 md:bg-none">
        <Form method="POST" className="w-full max-w-96 px-5 md:px-0">
          <h1 className="mb-5 text-center text-3xl font-medium text-white md:text-4xl md:text-current">
            Register
          </h1>
          <div className="flex flex-col gap-3 md:gap-5">
            <FormInput type="text" name="full-name" placeholder="Full name" />
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />
            <FormInput
              type="password"
              name="confirm-password"
              placeholder="Confirm password"
            />
          </div>
          <div className="my-5 flex flex-col justify-center gap-3 md:mt-10 md:flex-row md:gap-5">
            <button
              type="submit"
              className="btn btn-primary btn-sm grow md:btn-md"
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm grow md:btn-md"
              onClick={registerWithGoggle}
            >
              <span>Continue with Goggle</span>
              <FcGoogle className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="link link-primary text-white md:text-current"
            >
              You have already account?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
