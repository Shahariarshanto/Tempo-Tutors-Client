import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    // Handle login logic here
      console.log(data);
  };

  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-md mx-auto p-6 dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="border border-gray-300 px-3 py-2 rounded-md w-full dark:bg-gray-700 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: "Password is required" })}
                className="border border-gray-300 px-3 py-2 rounded-md w-full dark:bg-gray-700 dark:text-white"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p>Don,t have an account?</p>
          <Link to="/registration" className="text-blue-500">
            Register here
          </Link>
        </div>
        <div className="mt-4">
          <p>Or login with:</p>
          {/* Add social login buttons */}
        </div>
      </div>
    </div>
  );
}
