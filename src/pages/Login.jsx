// rrd imports
import { Form, Link } from "react-router-dom";

// Register hook
import { useRegister } from "../hooks/useRegister";

// Components
import { FormInput } from "../components";

// React icons
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { registerWithGoggle } = useRegister();
  return (
    <div className="flex min-h-screen w-full">
      <div className="auth-bg-image hidden w-[40%] md:block"></div>
      <div className="auth-bg-image flex w-full items-center justify-center bg-black/50 bg-blend-darken md:w-[60%] md:bg-black/0 md:bg-none">
        <Form method="POST" className="w-full max-w-96 px-5 md:px-0">
          <h1 className="mb-5 text-center text-3xl font-medium text-white md:text-4xl md:text-current">
            Login
          </h1>
          <div className="flex flex-col gap-3 md:gap-5">
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />
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
          <div className="flex flex-col justify-between md:flex-row">
            <p className="text-white md:text-current">Forget password?</p>
            <Link
              to="/register"
              className="link link-primary text-white md:text-current"
            >
              You don&apos;t have account yet?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
