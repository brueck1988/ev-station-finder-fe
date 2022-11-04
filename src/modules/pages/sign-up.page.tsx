import { Container, Typography } from "@mui/material";
import SignUpForm from "modules/user/sign-up-form.component"

export const SignUpPage = () => {
  return (
      <Container maxWidth="md">
            <Typography variant="h5" align="left">Sign Up for EV Finder:</Typography>
            <br />
            <SignUpForm />
        </Container>
  );
}

export default SignUpPage;