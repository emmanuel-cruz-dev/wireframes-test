import { CalendarIcon, CheckIcon } from "../../components/ui/Icons";
import PrivateLayout from "../../layouts/PrivateLayout";

function DashboardPageTwo() {
  return (
    <PrivateLayout>
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
    </PrivateLayout>
  );
}

export default DashboardPageTwo;
