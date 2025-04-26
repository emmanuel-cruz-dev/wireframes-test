import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard"); // o a donde quieras llevar después del login
    } catch (error) {
      setError(`Email o contraseña incorrectos. Error:${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

// import { FC } from "react";
// import { Link } from "react-router-dom";
// import { LoginFormProps } from "../../types/types";
// import useLoginForm from "../../hooks/auth/useLoginForm";

// const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     errors,
//     isLoading,
//     handleSubmit,
//   } = useLoginForm(onSubmit);

//   return (
//     <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//       <div className="text-center">
//         <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//           Iniciar sesión
//         </h2>
//         <p className="mt-2 text-sm text-gray-600">
//           ¿No tienes una cuenta?{" "}
//           <Link
//             to="/auth/register"
//             className="font-medium text-blue-600 hover:text-blue-500"
//           >
//             Regístrate
//           </Link>
//         </p>
//       </div>

//       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//         <div className="space-y-4 rounded-md">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Correo electrónico
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={`mt-1 block w-full px-3 py-2 border ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//               placeholder="correo@ejemplo.com"
//             />
//             {errors.email && (
//               <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Contraseña
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={`mt-1 block w-full px-3 py-2 border ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//               placeholder="********"
//             />
//             {errors.password && (
//               <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <input
//               id="remember-me"
//               name="remember-me"
//               type="checkbox"
//               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//             />
//             <label
//               htmlFor="remember-me"
//               className="ml-2 block text-sm text-gray-900"
//             >
//               Recordarme
//             </label>
//           </div>
//           <div className="text-sm">
//             <a
//               href="#"
//               className="font-medium text-blue-600 hover:text-blue-500"
//             >
//               ¿Olvidaste tu contraseña?
//             </a>
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
//         >
//           {isLoading ? (
//             <span className="flex items-center">
//               <svg
//                 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                 />
//               </svg>
//               Procesando...
//             </span>
//           ) : (
//             "Iniciar sesión"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
