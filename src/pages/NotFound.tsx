import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer: number | undefined;

    if (countdown > 0) {
      timer = setInterval(() => setCountdown(countdown - 1), 1000);
    }

    if (countdown === 0) {
      navigate("/");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-800">
            ¡Página no encontrada!
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 text-lg">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${(countdown / 10) * 100}%` }}
            ></div>
          </div>

          <p className="text-gray-500">
            Regresando a la página de inicio en{" "}
            <span className="font-semibold">{countdown}</span> segundos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              Ir a Inicio
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium"
            >
              Volver Atrás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
