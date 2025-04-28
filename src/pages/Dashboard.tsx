import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <section className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Bienvenido {user?.email}!</h1>
        <button
          onClick={logout}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
        >
          Cerrar sesión
        </button>
      </div>
      <div>
        <h2>Home</h2>
      </div>
    </section>
  );
};

export default Dashboard;
