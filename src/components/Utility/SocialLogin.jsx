import { FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <button className="flex items-center justify-center w-full px-4 py-2 text-gray-900 bg-slate-300 rounded-lg">
      <FaGoogle className="mr-2" />
      Login with Google
    </button>
  );
}
