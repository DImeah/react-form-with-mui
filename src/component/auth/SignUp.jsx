import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionButton from "../ui/ActionButton";

const SignUp = () => {
  return (
    <FormWrapper
      headingText={"Create your Account"}
      directionText={"Already have an account? Login"}
    >
      <div className="flex gap-4">
        <InputField label={"First name"} />
        <InputField label={"Lastname"} />
      </div>
      <InputField label={"Phone number"} />
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <ActionButton text={"Sign Up"} />
    </FormWrapper>
  );
};

export default SignUp;
