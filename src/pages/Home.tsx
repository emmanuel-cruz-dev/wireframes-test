import LoginForm from "../components/auth/LoginForm";

function Home() {
  return (
    <main className="bg-blue-200 flex justify-evenly items-center px-40 gap-8 h-screen">
      <h1 className="text-4xl">Home</h1>

      <LoginForm />
    </main>
  );
}

export default Home;
