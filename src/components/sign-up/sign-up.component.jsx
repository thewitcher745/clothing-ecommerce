import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./sign-up.styles.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

function SignUp() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    createSuccess: false,
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName, email });
      setState({ ...state, createSuccess: true });
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const { displayName, email, password, confirmPassword, createSuccess } =
    state;

  const signUpButtonElement = (
    <CustomButton type="submit">Sign up</CustomButton>
  );
  const createSuccessElement = (
    <div style={{ color: "green" }}>
      Account created successfully. You will be logged in and moved to the main
      page in a few seconds.
    </div>
  );

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account.</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        {createSuccess ? createSuccessElement : signUpButtonElement}
      </form>
    </div>
  );
}

export default SignUp;
