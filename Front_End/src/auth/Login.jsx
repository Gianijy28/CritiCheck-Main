import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../firebase/firebase"; // Import Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth";
import logo from "../assets/components/criticheck.png";
import microsoft from "../assets/components/microsoft.png";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async () => {
    if (!email || !password) {
      setLoginError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setLoginError('');

    try {
      // Authenticate user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      
      // Navigate to Dashboard after login
      navigate("/dashboard", { replace: true }); 
    } catch (error) {
      setLoginError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-center bg-neutral-800">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <img src={logo} alt="CritiCheck Logo" className="w-20 mb-6" />
        <h3 className="text-xl font-semibold text-white mb-5">Welcome to CritiCheck!</h3>

        <form className="bg-neutral-900 rounded-lg p-6 w-full max-w-sm shadow-lg border border-gray-700 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="ml-5 block text-white text-sm mb-1">Username or school email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-74 px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ml-5"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-white text-sm mb-1 ml-5">Password</label>
            <div className="relative w-full">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-74 px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ml-5"
              />
              <a href="/forgot-password" className="absolute top-2 right-4 text-sm text-blue-400 hover:underline -mt-8 mr-1">
                Forgot password?
              </a>
            </div>
          </div>

          {loginError && <p className="text-red-500 text-sm mb-2 ml-5">{loginError}</p>}

          <button
            type="button"
            onClick={handleLogin}
            className="w-74 py-2 bg-[#00FF7F] hover:bg-[#00CC66] text-black font-bold rounded transition shadow-lg ml-5"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Log in"}
          </button>

          <div className="w-74 flex items-center justify-center my-2 text-gray-400 text-sm ml-5">
            <div className="w-full border-b border-gray-600"></div>
            <span className="px-2">Or</span>
            <div className="w-full border-b border-gray-600"></div>
          </div>

          <button className="w-74 py-2 bg-white border border-gray-600 text-black font-bold rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition shadow-lg ml-5" disabled>
            <img src={microsoft} alt="Microsoft Logo" className="w-5 h-5" />
            Sign in with Microsoft
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          New to CritiCheck?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}