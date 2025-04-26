import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Bienvenido, {user?.email}!</h1>
      <button
        onClick={logout}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
