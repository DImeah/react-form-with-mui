import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionButton from "../ui/ActionButton";

const Login = () => {
  return (
    <FormWrapper
      headingText={"Welcome Back"}
      directionText={"Dont have an account yet? Sign up"}
    >
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <ActionButton text={"LOG IN"} />
    </FormWrapper>
  );
};

export default Login;
