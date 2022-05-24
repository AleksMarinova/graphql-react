import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQl/Mutations";
import { useMutation } from "@apollo/client";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION)

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    })
    if(error){
      console.log(error)
    }
    console.log("User added");
  }

  return (
    <div>
      <h1>Form</h1>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addUser();
      }}
      >
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          required={true}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          required={true}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          required={true}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          required={true}
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Form;
