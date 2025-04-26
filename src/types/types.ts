export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface FetchResult {
  status: "ok" | "error";
  data: { results: Professional[]; error?: Error };
}

export type OnSubmitHandler = (
  name: string,
  email: string,
  password: string
) => void;

export type OnSubmitHandlerLogin = (email: string, password: string) => void;

export interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

export interface RegisterProps {
  onSubmit?: (name: string, email: string, password: string) => void;
}

export type LoaderProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  text?: string;
  fullScreen?: boolean;
};

export interface Professional {
  id: number;
  dni: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  photoUrl: string;
  birthDate: string; // o podrías usar Date si manejas objetos Date
  licenseNumber: string;
  specialty: string;
}

export interface Appointment {
  id: string;
  title: string;
  start: string | Date;
  end: string | Date;
  status: "available" | "booked";
}
