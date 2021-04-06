import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrswwd2CGXgo9vUwbpcaMni5z0L1UH4Fl8sA&usqp=CAU" />
        <Button onClick={signIn} variant="outlined">
          {" "}
          Sign in with Google{" "}
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 11px 11px 22px #969696, -11px -11px 22px #ffffff;
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
