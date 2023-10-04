import React, { useState } from "react";

let number = "1234";
export const Design = () => {
  //   const [error, setError] = useState("");
  const [input, setInput] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  console.log("input");
  console.log("setInput");

  function handleInput(name, value) {
    setInput({ ...input, [name]: value });
  }
  function handleSubmit(e) {
    // alert("hello");
    e.preventDefault();
    let res = Object.values(input);
    console.log(res);
    let data = res[0] + res[1] + res[2] + res[3];
    console.log(data);
    if (data === number) {
      alert("OTP is valid");
    } else {
      alert("OTP is not valid");
      //   setValid("false");
    }
    // if (/^[0-9]$/) {
    //   alert("Successfull");
    // } else {
    //   alert("invalid OTP");
    // }
  }

  return (
    <div className="main">
      <h2 id="head">Verify your email address</h2>
      <p id="para">
        A four-digit code has been sent to your email name@frontendpro.dev.
        <br />
        Please enter the code below to verify your email address
      </p>
      <div id="inputBox">
        <input
          type="text"
          className="box-1"
          name="input1"
          maxLength="1"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
        />
        <input
          type="text"
          className="box-2"
          name="input2"
          maxLength="1"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
        />
        <input
          type="text"
          className="box-3"
          name="input3"
          maxLength="1"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
        />
        <input
          type="text"
          className="box-4"
          name="input4"
          maxLength="1"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
        />
        <br />
      </div>
      <div id="sub-btn">
        <input
          type="submit"
          value="Verify OTP"
          onClick={(e) => handleSubmit(e)}
          id="btn"
        ></input>
      </div>
    </div>
  );
};
