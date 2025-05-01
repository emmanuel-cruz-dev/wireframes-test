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
      <main className="flex">
        <aside className="flex flex-col gap-4">
          <h2 className="text-2xl">Home</h2>
          <nav>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Pacientes</a>
              </li>
              <li>
                <a href="#">Agenda</a>
              </li>
              <li>
                <a href="#">Configuración</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </aside>
        <section>
          <h2 className="text-3xl">Calendar</h2>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
