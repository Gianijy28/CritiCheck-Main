import microsoft from "../assets/components/microsoft.png";
import logo from "../assets/components/criticheck.png";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; 

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const auth = getAuth(app);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-center bg-neutral-800">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <img src={logo} alt="CritiCheck Logo" className="w-20 mb-6" />
        <h3 className="text-xl font-semibold text-white mb-5">Create an Account</h3>

        <form className="bg-neutral-900 rounded-lg p-6 w-90 max-w-md shadow-lg border border-gray-700 text-left">
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="button"
            className="w-full py-2 bg-[#00FF7F] hover:bg-[#00CC66] text-black font-bold rounded transition shadow-lg"
          >
            Sign Up
          </button>

          <div className="flex items-center justify-center my-4 text-gray-400 text-sm">
            <div className="w-full border-b border-gray-600"></div>
            <span className="px-2">Or</span>
            <div className="w-full border-b border-gray-600"></div>
          </div>

          <button className="w-full py-2 bg-white border border-gray-600 text-black font-bold rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition shadow-lg">
            <img src={microsoft} alt="Microsoft Logo" className="w-5 h-5" />
            Sign up with Microsoft
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
