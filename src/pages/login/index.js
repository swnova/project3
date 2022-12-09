import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function LogIn() {
  //login
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://vroom-backendsw/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/playerpage'
		} else {
			alert('Please check your username and password')
		}
	}


  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-full p-5">
        <div className="signInBox border-current border-solid border-4">
          <form className="flex flex-col justify-center items-center m-5">
            <div className="m-2">
            <form onSubmit={loginUser}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <br />
              <input type="submit" value="Login" />
            </form>
                  </div>
                </form>
              </div>
              <div className="text-sm text-red-500 mt-5 text-center">
                New Player? Enter your name, password and{" "}
                <button className="bg-red-500 p-1 text-sm text-black" id="signUpButton">
                  {" "}
                  Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
