// TODO eliminar los componentes que elimine el equipo de UX/UI antes de componetizar
// import { useContextAuth } from "../../features/auth/hooks/useContextAuth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ClipBoardIcon } from "../../components/ui/Icons";
import PrivateLayout from "../../layouts/PrivateLayout";

const PatientItemList = () => {
  return (
    <div className="text-neutral-600">
      <ul className="flex justify-between items-center gap-8">
        <li className="flex gap-2">
          <span className="flex items-center font-semibold text-sm bg-gray-200/60 px-3 py-[1px] rounded-xl">
            12:00
          </span>

          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1605783313291-1b996e9e7376?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <ul className="leading-3 font-semibold">
              <li className="text-gray-700">Lucas Fernández</li>
              <li className="text-gray-500 text-sm">(13)</li>
            </ul>
          </div>
        </li>
        <li className="">44.617.293</li>
        <li className="">OSPLAD</li>
        {/* <li className="">
          <button className="text-blue-600 py-2 px-5 border border-black rounded-4xl hover:bg-gray-200 cursor-pointer">
            Ver paciente
          </button>
        </li> */}
      </ul>
    </div>
  );
};

const MedicalHistory = () => {
  return (
    <article>
      <header className="flex justify-between items-center mb-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          {" "}
          <ClipBoardIcon /> Historial clínico
        </h2>
        <button className="text-blue-600 py-2 px-5 border border-black rounded-4xl hover:bg-gray-200 cursor-pointer">
          Ver historial
        </button>
      </header>
      {/* <ul className="[&>li]:mb-2 text-sm">
        <li>05/04/2025 — Audiometría infantil — Normal</li>
        <li>20/03/2025 — Evaluación neurológica — Seguimiento recomendado</li>
        <li>12/02/2025 — Test de lenguaje — Déficit leve</li>
      </ul> */}
      <MedicalHistoryTable />
    </article>
  );
};

const MedicalHistoryTable = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Título
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Observación
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Especialidad
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Profesional
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-2 py-4 whitespace-nowrap">05 Abr 2025</td>
            <td className="px-2 py-4 whitespace-nowrap">
              Audiometría infantil
            </td>
            <td className="px-2 py-4 whitespace-nowrap">Normal</td>
            <td className="px-2 py-4 whitespace-nowrap">Fonoaudiología</td>
            <td className="px-2 py-4 whitespace-nowrap">Dr. José Hernández</td>
          </tr>
          <tr>
            <td className="px-2 py-4 whitespace-nowrap">20 Mar 2025</td>
            <td className="px-2 py-4 whitespace-nowrap">
              Evaluación neurológica
            </td>
            <td className="px-2 py-4 whitespace-nowrap">
              Seguimiento recomendado
            </td>
            <td className="px-2 py-4 whitespace-nowrap">Psicología</td>
            <td className="px-2 py-4 whitespace-nowrap">Dr. Carina Ledesma</td>
          </tr>
          <tr>
            <td className="px-2 py-4 whitespace-nowrap">12 Feb 2025</td>
            <td className="px-2 py-4 whitespace-nowrap">Test de lenguaje</td>
            <td className="px-2 py-4 whitespace-nowrap">Déficit leve</td>
            <td className="px-2 py-4 whitespace-nowrap">Psicopedagogía</td>
            <td className="px-2 py-4 whitespace-nowrap">Dr. Laura Torres</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const PatientNotes = () => {
  return (
    <article>
      <header className="flex justify-between mb-4">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <ClipBoardIcon /> Notas
        </h2>
        <button className="text-blue-600 py-2 px-5 border border-black rounded-4xl hover:bg-gray-200 cursor-pointer">
          Agregar Nota
        </button>
      </header>
      <p>
        Paciente de 13 años con déficit leve en lenguaje, evaluado en febrero.
        Seguimiento neurológico recomendado en marzo por posibles dificultades
        de aprendizaje. Audiometría normal en abril, sin alteraciones auditivas.
        Se sugiere terapia de lenguaje y control neurológico periódico para
        monitorear evolución. Familia comprometida con el proceso.
      </p>
    </article>
  );
};

const DashboardPage = () => {
  // const { state } = useContextAuth();

  return (
    <PrivateLayout>
      {/* <h1 className="text-2xl font-semibold pb-8 pt-2">
        Bienvenido {state.user?.email}
      </h1> */}
      <div className="grid grid-cols-7 gap-4 rounded-lg">
        {/* <div className="col-span-2 mb-6">
          <div className="bg-white p-4 rounded-2xl">
            <h2 className="text-xl mb-6">Turnos de hoy</h2>

            <div className="flex justify-between px-4">
              <article className="">
                <p className="text-blue-600 text-sm mb-2">Agendados</p>
                <p className="flex gap-2 w-28 font-semibold border border-gray-300 p-2 rounded-lg">
                  <CalendarIcon />
                  12
                </p>
              </article>
              <article className="">
                <p className="text-blue-600 text-sm mb-2">Atendidos</p>
                <p className="flex gap-2 w-28 font-semibold border border-gray-300 p-2 rounded-lg">
                  <CheckIcon /> 1/12
                </p>
              </article>
            </div>
          </div>
        </div> */}

        <article className="col-span-7 flex flex-col gap-4 bg-white rounded-2xl">
          <h2 className="text-2xl pt-6 pb-6 px-4 border-b-2 border-gray-300/90">
            Turnos de hoy, <span className="text-blue-600">Sábado 5</span>
          </h2>
          {/* <div className="flex justify-between items-center bg-white py-6 px-4 rounded-2xl">
            <h2 className="text-xl">Lucas Fernández</h2>

            <div className="flex gap-4">
              <span className="font-semibold text-gray-500">1/12</span>
              <button className="text-gray-500 hover:text-gray-900 cursor-pointer">
                <FaChevronLeft />
              </button>
              <button className="text-gray-500 hover:text-gray-900 cursor-pointer">
                <FaChevronRight />
              </button>
            </div>
          </div> */}
          <div className="flex flex-col bg-white rounded-2xl p-6">
            <div className="flex justify-between items-center border- border-gray-400 pb-6">
              <PatientItemList />
              <div className="flex gap-4">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <span className="font-semibold text-gray-500">1/12</span>
                </p>
                <button className="text-gray-500 hover:text-gray-900 cursor-pointer">
                  <FaChevronLeft />
                </button>
                <button className="text-gray-500 hover:text-gray-900 cursor-pointer">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="border- border-gray-400 py-6">
              <MedicalHistory />
            </div>
            <div className="border- border-gray-400 py-6">
              <PatientNotes />
            </div>
            {/* <footer className="flex justify-end gap-4 pt-6">
              <select
                className="border border-gray-400 px-2 rounded-lg cursor-pointer"
                name=""
                id=""
              >
                <option value="">Asistencia</option>
                <option value="">Presente</option>
                <option value="">Ausente</option>
              </select>
              <button className="text-white py-2 px-5 bg-blue-500 rounded-4xl hover:bg-blue-700 cursor-pointer">
                Llamar
              </button>
            </footer> */}
          </div>
        </article>
      </div>
    </PrivateLayout>
  );
};

export default DashboardPage;
