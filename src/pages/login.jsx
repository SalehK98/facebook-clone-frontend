import React from "react";
import LoginCard from "../components/LoginCard";
// import { ReactComponent as Logo } from "./Facebook-f_Logo-Blue-Logo.wine.svg";
import { ReactComponent as Logo2 } from "./Facebook-Logo.wine.svg";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  color: "darkslategray",
  backgroundColor: "aliceblue",
  backgroundSize: "cover",
  padding: 8,
  borderRadius: 4,
  alignItems: "center",
  height: "100vh",
  margin: "0px",
});

function Login({ navStatus, setNavStatus }) {
  setNavStatus(true);
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [inputType, setInputType] = React.useState("password");

  // const onClick = () => {
  //   // useEffect(() => {
  //   axios
  //     .post("http://localhost:4000/postlogin", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // }, [])`;
  // };

  return (
    <Wrapper>
      <Logo2 />
      <LoginCard
      // email={email}
      // setEmail={setEmail}
      // password={password}
      // setPassword={setPassword}
      // inputType={inputType}
      // setInputType={setInputType}
      // onClick={onClick}
      // autoFocus
      />
    </Wrapper>
  );
}

export default Login;
