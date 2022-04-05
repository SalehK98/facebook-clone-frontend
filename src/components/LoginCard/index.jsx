import MyButton from "../Button";
import React from "react";
import axios from "axios";
import { styled } from "@mui/system";
import { Input } from "@mui/material";
// import webkit from webkit

const Wrapper = styled("div")({
  backgroundColor: "#fff",
  border: "none",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
  boxSizing: "border-box",
  margin: "10px 0 0",
  padding: "20px 0 28px",
  width: 396,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 400,
  flexWrap: "wrap",
});

function LoginCard() {
  // {
  // email,
  // setEmail,
  // password,
  // setPassword,
  // inputType,
  // setInputType,
  // onClick,
  // }
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [inputType, setInputType] = React.useState("password");

  const onClick = () => {
    // useEffect(() => {
    axios
      .post("http://localhost:4000/postlogin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    // }, [])`;
  };

  const createAccountSX = {
    textTransform: "none",
    border: "none",
    borderRadius: "6px",
    fontSize: 18,
    lineHeight: "48px",
    padding: "0 16px",
    backgroundColor: "#42b72a",
    "&:hover": {
      backgroundColor: "#42b72a",
    },
  };

  const signInSX = {
    width: 340,
    textTransform: "none",
    border: "none",
    borderRadius: "6px",
    fontSize: 21,
    lineHeight: "48px",
    padding: "0 16px",
    backgroundColor: "##1877f2",
    "&:hover": {
      backgroundColor: "##1877f2",
    },
    margin: "5px",
  };

  const googleLoginSX = {
    widht: 400,
    textTransform: "none",
    border: "none",
    borderRadius: "none",
    fontSize: 21,
    lineHeight: "48px",
    padding: "0 16px",
    backgroundColor: "#fff",
    color: "#1877f2",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  };

  return (
    // onClick={() => alert("Hello")}
    <Wrapper>
      <label htmlFor="email">
        <input
          style={{
            width: 332,
            height: 40,
            fontSize: "18px",
            border: "1px solid #dddfe2",
            color: "#1d2129",
            borderRadius: "6px",
            padding: "5px 7px",
            margin: "5px",
          }}
          id="email"
          name="email"
          placeholder="email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // autoFocus
        ></input>
      </label>
      <label htmlFor="password">
        <input
          style={{
            width: 332,
            height: 40,
            fontSize: "18px",
            border: "1px solid #dddfe2",
            color: "#1d2129",
            borderRadius: "6px",
            padding: "5px 7px",
            margin: "5px",
          }}
          id="password"
          name="password"
          type={inputType}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // autoFocus
        ></input>
      </label>
      <MyButton size="small" text="Sign in" sx={signInSX} onClick={onClick} />
      <p style={{ display: "flex", flexWrap: "wrap" }}>OR</p>
      <MyButton size="small" text="Continue with Google" sx={googleLoginSX} />
      <hr width={356}></hr>
      <MyButton
        size="larger"
        text="Create a new account "
        sx={createAccountSX}
      />
    </Wrapper>
  );
}

export default LoginCard;
