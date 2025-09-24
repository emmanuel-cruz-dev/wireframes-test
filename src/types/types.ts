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
  birthDate: string;
  licenseNumber: string;
  specialty: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  dni: string;
  nextSession: string;
  lastSession: string;
  contact: string;
  avatarUrl?: string;
}

export interface Appointment {
  id: number;
  patientId: number;
  patientName: string;
  date: string;
  time: string;
  duration: number;
  status: "scheduled" | "completed" | "cancelled";
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppointmentFormData {
  patientId: number;
  date: string;
  time: string;
  duration: number;
  notes?: string;
}

export interface MedicalHistoryProps {
  children: React.ReactNode;
}
