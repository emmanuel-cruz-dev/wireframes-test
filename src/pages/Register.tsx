import SignUpForm from "../components/auth/SignUpForm";

function Register() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="p-6">Register</h1>
      <SignUpForm />
    </section>
  );
}

export default Register;
