import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import PublicLayout from "../../layouts/PublicLayout";

const LoginPage = () => {
  return (
    <PublicLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <LoginForm />
          <div className="text-center mt-4">
            <p className="text-gray-600">
              ¿No tienes cuenta?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default LoginPage;
