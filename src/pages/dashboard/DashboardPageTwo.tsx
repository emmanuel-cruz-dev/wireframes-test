import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CalendarIcon, CheckIcon } from "../../components/ui/Icons";
import PrivateLayout from "../../layouts/PrivateLayout";
import PatientItemList from "../../components/ui/PatientItemList";
import PatientNotes from "../../components/ui/PatientNotes";

function DashboardPageTwo() {
  return (
    <PrivateLayout>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-2 mb-6">
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
        </div>
        <div className="col-span-5 flex flex-col gap-4">
          <div className="flex justify-between items-center bg-white py-6 px-4 rounded-2xl">
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
          </div>
          <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="w-8/12">
                <PatientItemList />
              </div>
              <button className="text-blue-600 py-2 px-5 border border-black rounded-4xl hover:bg-gray-200 cursor-pointer">
                Ver paciente
              </button>
            </div>
            <PatientNotes />
            <footer className="flex justify-end gap-4 pt-6">
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
            </footer>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
}

export default DashboardPageTwo;
