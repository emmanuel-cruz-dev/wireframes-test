import { FC } from "react";
import { MedicalHistoryProps } from "../../types/types";
import { ClipBoardIcon } from "./Icons";

const MedicalHistory: FC<MedicalHistoryProps> = ({ children }) => {
  return (
    <article>
      <header className="flex justify-between items-center mb-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <ClipBoardIcon /> Historial clínico
        </h2>
        <button className="text-blue-600 py-2 px-5 border border-black rounded-4xl hover:bg-gray-200 cursor-pointer">
          Ver historial
        </button>
      </header>
      {children}
    </article>
  );
};

export default MedicalHistory;
