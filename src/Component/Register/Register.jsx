import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
const Register = () => {
  const [showError, setShowError] = useState("");
  const [showSuccess, setShowSuccess] = useState("");

  const handleSignUpButton = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    // console.log(email, name, password, terms);

    // Erase first
    setShowError("");
    setShowSuccess("");
    // Erase first end

    if (name.length < 3) {
      setShowError("Use your proper name!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setShowError("Must Use one uppercase letter in password!");
      return;
    } else if (password.length < 6) {
      setShowError("Please insert at least 6 length password or more!");
      return;
    } else if (!terms) {
      setShowError("Accept terms and condition first!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setShowSuccess("User Sign Up successful")
        console.log(res.user);
      })
      .catch((err) => {
        setShowError(err.message)
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="bg-red-200">
        <div className="w-1/3 mx-auto">
          <form onSubmit={handleSignUpButton}>
            <div className="text-center py-9">
              <input
                className="w-full py-3 px-2 rounded-md"
                placeholder="Your Name"
                type="text"
                name="name"
                id="1"
                required
              />
              <br></br>
              <br></br>
              <input
                className="w-full py-3 px-2 rounded-md"
                placeholder="Your Email"
                type="email"
                name="email"
                id="2"
                required
              />
              <br></br>
              <br></br>
              <input
                className="w-full py-3 px-2 rounded-md"
                placeholder="Your Password"
                type="password"
                name="password"
                id="3"
                required
              />
              <br></br>
              <div className="my-3 text-left ml-1">
                <input type="checkbox" name="terms" id="" />
                <label className="ml-1" htmlFor="terms">
                  Accept our{" "}
                  <a href="/reg" className="text-green-500">
                    Terms & conditions!
                  </a>
                </label>
              </div>
              <button className="btn hover:bg-green-400 bg-green-500 border-none text-white w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-3 pb-6 w-1/3 mx-auto">
        {showError && <p className="text-red-600">{showError}</p>}
        {showSuccess && <p className="text-green-500">{showSuccess}</p>}
      </div>
    </div>
  );
};

export default Register;
