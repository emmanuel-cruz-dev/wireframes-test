import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="p-6">Login</h1>
      <LoginForm />
    </main>
  );
}

export default Login;
