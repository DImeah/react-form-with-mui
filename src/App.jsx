import "./App.css";
import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";

export default function App() {
  return (
    <>
      <section className="flex justify-center gap-10 items-center pt-10 bg-transparent">
        <Login />
        <SignUp />
      </section>
    </>
  );
}
