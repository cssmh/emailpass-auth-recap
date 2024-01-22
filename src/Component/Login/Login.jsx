import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";

const Login = () => {

  const [userDetails, setUserDetails] = useState([])
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleLoginButton = e => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password);

    setUserDetails([])
    setSuccess("")
    setError("")

    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      if(res.user.emailVerified){
        setUserDetails(res.user)
        setSuccess("User logged successfully")
      }else{
        alert("verify your email first")
      }
    })
    .catch(err => {
      setError(err.message)
      console.log(err.message)
    })
  }
  console.log(userDetails);
  console.log(success);
  console.log(error);

  const getEmail = useRef(null)
  const handleForgotPassword = () => {
  const email = getEmail.current.value;
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    alert("give me valid email")
    return;
  }else{
    sendPasswordResetEmail(auth, email)
    .then(console.log("password reset mail sent"))
    .catch(err => console.log(err.message))
  }
}

  return (
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login using your email password.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  ref={getEmail}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                  onClick={handleForgotPassword}
                    href="#"
                    className="label-text-alt link link-hover text-sm"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn hover:bg-green-500 bg-green-500 border-none text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
