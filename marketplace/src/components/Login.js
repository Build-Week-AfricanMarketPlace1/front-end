import React, { useState } from "react";
import axios from "axios";
import { baseURL } from '../api/axiosWithAuth'
import { Link, useHistory } from "react-router-dom";


export default function SignIn() {
  const history = useHistory();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [setPost] = useState([]);

  // const validateChange = (e) => {
  //   yup
  //     .reach(formSchema, e.target.name)
  //     .validate(e.target.name === "terms" ? e.target.checked : e.target.value)
  //     .then((valid) => {
  //       setErrors({
  //         ...errors,
  //         [e.target.name]: "",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);

  //       setErrors({
  //         ...errors,
  //         [e.target.name]: err.errors[0],
  //       });
  //     });
  // };

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}api/auth/login`, formState)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.auth.id)
        history.push(`/profile/${res.data.auth.id}`)

        setFormState({
          username: "",
          password: "",
        });
      })
      .catch((err) => {
        setServerError("oops! something happened!");
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    // validateChange(e);
    setFormState(newFormData);
  };

  // const formSchema = yup.object().shape({
  //   email: yup
  //     .string()
  //     .username("Must be a valid email")
  //     .required("Must include an email"),

  //   password: yup.string().required("Password is required"),
  // });

  // useEffect(() => {
  //   formSchema.isValid(formState).then((isValid) => {
  //     setButtonDisabled(!isValid);
  //   });
  // }, [formState]);

  return (
    <form onSubmit={formSubmit}>
      {serverError ? <p className="error">{serverError}</p> : null}

        <input
          id="username"
          type="text"
          name="username"
          value={formState.email}
          placeholder="Username"
          onChange={inputChange}
          data-cy="username"
        />
        {errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}

     
        
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          placeholder="Password"
          onChange={inputChange}
          data-cy="password"
        />
   

      <button type="submit">
        Submit
      </button>
      <Link to = "">Forgot Username/Password</Link>
      <Link to="/SignUp">Don't have an account? Please register</Link>
    </form>
  );
}
