// api.ts

export interface RegisterPayload {
  email: string;
  password: string;
  dni: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  photoUrl: string;
  birthDate: string; // ISO YYYY‑MM‑DD
  licenseNumber: string;
  specialty: string;
}

export interface AuthPayload {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  name: string;
  lastName: string;
  // …otros campos de perfil que devuelva tu API
}

// URL base desde .env
const BASE = import.meta.env.VITE_API_URL;

// Función genérica de fetch que añade JSON headers y maneja cookies
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  const response = await fetch(`${BASE}${path}`, {
    ...options,
    headers,
    credentials: "include", // enviar y recibir cookies
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || response.statusText);
  }

  return response.json() as Promise<T>;
}

// Rutas de la API

/**
 * Registra un nuevo profesional. El servidor debe responder con Set-Cookie para la sesión.
 */
export const registerUser = (data: RegisterPayload) =>
  request<void>("/auth/professional/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

/**
 * Inicia sesión: el servidor coloca la cookie de sesión.
 */
export const loginUser = (data: AuthPayload) =>
  request<void>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

/**
 * Obtiene un profesional por ID (usa la cookie de sesión automáticamente).
 */
export const getProfessionalById = (id?: number) => {
  return request<UserProfile>(`/professionals/${id}`, {
    method: "GET",
  });
};

/**
 * Si tu servidor expone un endpoint tipo `/auth/me`, úsalo así:
 */
export const getCurrentProfessional = () =>
  request<UserProfile>("/auth/me", {
    method: "GET",
  });

/**
 * Nota: si `/auth/me` devuelve 500, puede que no exista en tu servidor.
 * En ese caso sigue usando `getProfessionalById(id)` pasando un ID válido
 * que tengas tras el login (por ejemplo en la respuesta de loginUser).
 */

/**
 * Interfaz para la respuesta paginada de profesionales.
 */
export interface ProfessionalsPage {
  /** Lista de profesionales en la página actual */
  content: UserProfile[];
  /** Número de página (empezando en 0) */
  page: number;
  /** Tamaño de página solicitado */
  size: number;
  /** Total de profesionales disponibles */
  totalElements: number;
  /** Total de páginas calculado */
  totalPages: number;
}

/**
 * Obtiene un listado paginado de profesionales.
 * Dependiendo de tu API la ruta y los nombres de parámetro pueden variar.
 * Swagger: GET /professionals/paginated?page={page}&size={size}
 */
export const getProfessionalsPaginated = (
  page: number = 0,
  size: number = 10
) =>
  request<ProfessionalsPage>(
    `/professionals/paginated?page=${page}&size=${size}`,
    {
      method: "GET",
    }
  );
