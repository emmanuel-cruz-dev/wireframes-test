import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  CalendarIcon,
  CheckIcon,
  ClipBoardIcon,
} from "../../components/ui/Icons";
import PrivateLayout from "../../layouts/PrivateLayout";
import PatientItemList from "../../components/ui/PatientItemList";
import PatientNotes from "../../components/ui/PatientNotes";
import MedicalHistoryList from "../../components/ui/MedicalHistoryList";
import CalendarMUI from "../../components/ui/CalendarMUI";

function DashboardPageTwo() {
  return (
    <PrivateLayout>
      <section className="grid grid-cols-10 gap-4">
        <article className="col-span-3">
          <div className="bg-white p-4 rounded-t-2xl">
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
          <CalendarMUI />
        </article>

        <article className="col-span-7 flex flex-col gap-4">
          <article className="flex justify-between items-center bg-white py-6 px-6 rounded-2xl">
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
          </article>
          <article className="flex flex-col bg-white py-6 rounded-2xl">
            <header className="border-b border-gray-400 pb-6 px-6 flex justify-between items-center">
              <div className="w-8/12">
                <PatientItemList />
              </div>
              <button className="text-blue-600 py-2 px-5 border border-black rounded-4xl hover:bg-gray-200 cursor-pointer">
                Ver paciente
              </button>
            </header>
            <article className="border-b border-gray-400 py-6 px-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <ClipBoardIcon /> Historial clínico
              </h2>
              <MedicalHistoryList />
            </article>

            <article className="border-b border-gray-400 py-6 px-6">
              <PatientNotes />
            </article>
            <footer className="flex justify-end gap-4 pt-6 px-6">
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
          </article>
        </article>
      </section>
    </PrivateLayout>
  );
}

export default DashboardPageTwo;
