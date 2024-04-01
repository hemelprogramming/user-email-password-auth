import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepts = e.target.terms.checked;
    setRegisterError('');
    setSuccess('');
    if (password.length < 6) {
      setRegisterError(' Password should be at least 6 characters ');
      return;
    } else if (!accepts) {
      setRegisterError('please accepts your terms and condition');
      return;
    }

    console.log(email, password, accepts);

    createUserWithEmailAndPassword(auth, email, password, accepts)
      .then(result => {
        console.log(result.user);
        setSuccess('user create a successfully');
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="border">
      <div className="mx-auto md:w-1/2">
        <h1 className="text-3xl mb-8">Please Register</h1>
        <form onSubmit={handleRegister}>
          <input
            className="mb-5 w-full py-2 px-4"
            type="email"
            name="email"
            id=""
            required
            placeholder="enter your email"
          />
          <br />
          <div className="relative">
            <input
              className="mb-5 w-full py-2 px-4"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id=""
              required
              placeholder="enter your password"
            />
            <span
              className="absolute mt-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">accepts our terms and condition</label>
          <br />
          <input
            className="mb-5 w-full btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-500">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>
          Already have an account ? please <Link to="/login">Login</Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Register;
