import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Utility/SocialLogin";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
   const {  signInWithGoogle } =
      useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  const form = location.state?.form?.pathname || "/";





 const password = watch("password");
    const onSubmit = (data) => console.log(data);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
  
  
  // Handle google register
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        fetch("http://localhost:9000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: loggedUser.displayName,
            Email: loggedUser.email,
          }),
        });

        navigate(form);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="dark:bg-gray-800">
      <div className=" max-w-md mx-auto p-6  dark:bg-gray-800 dark:text-white bg-white text-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="border border-gray-300 dark:bg-gray-700 dark:text-white px-3 py-2 rounded-md w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="border border-gray-300 dark:bg-gray-700 dark:text-white px-3 py-2 rounded-md w-full"
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      "Password must contain at least one capital letter and one special character",
                  },
                })}
                className="border border-gray-300 px-3 dark:bg-gray-700 dark:text-white py-2 rounded-md w-full"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              className="border dark:bg-gray-700 dark:text-white border-gray-300 px-3 py-2 rounded-md w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block mb-2 font-medium">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              {...register("photoURL")}
              className="border dark:bg-gray-700 dark:text-white border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block mb-2 font-medium">
              Gender
            </label>
            <select
              id="gender"
              {...register("gender")}
              className="border dark:bg-gray-700 dark:text-white border-gray-300 px-3 py-2 rounded-md w-full"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber")}
              className="border dark:bg-gray-700 dark:text-white border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 font-medium">
              Address
            </label>
            <textarea
              id="address"
              {...register("address")}
              className="border dark:bg-gray-700 dark:text-white border-gray-300 px-3 py-2 rounded-md w-full"
            ></textarea>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", {
                required: "You must accept the terms and conditions",
              })}
              className="mr-2"
            />
            <label htmlFor="terms" className="font-medium">
              I accept the terms and conditions
            </label>
            {errors.terms && (
              <p className="text-red-500">{errors.terms.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Register
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>

                 <div className="mt-4">
          <p className="text-gray-900 dark:text-white my-3 text-center">Or</p>
          <div onClick={handleGoogleSignIn}>
         
          
          <SocialLogin />
          </div>
</div>

       
      </div>
    </div>
  );
}
