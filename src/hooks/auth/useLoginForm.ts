import { useState } from "react";
//import { loginUser /* ya no devuelve token */, AuthPayload } from "../api/api";
import {
  loginUser /* ya no devuelve token */,
  AuthPayload,
} from "../../api/api";
import { OnSubmitHandlerLogin } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface LoginErrors {
  email?: string;
  password?: string;
}

const useLoginForm = (onSubmit?: OnSubmitHandlerLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};

    if (!email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const payload: AuthPayload = { email, password };
      // Ahora loginUser solo devuelve void y el servidor fija la cookie
      await loginUser(payload);

      // avisamos al padre (por ejemplo para actualizar contexto de usuario)
      // onSubmit?.();
      onSubmit?.(email, password);

      // redirigimos
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrors((prev) => ({ ...prev, email: err.message }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    isLoading,
    handleSubmit,
  };
};

export default useLoginForm;
