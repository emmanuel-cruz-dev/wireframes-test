// import { createContext, useState, ReactNode, useEffect } from "react";

// interface User {
//   id: number;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   token: string | null;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
//   isAuthenticated: boolean;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(
//   undefined
// );

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     const storedUser = localStorage.getItem("user");

//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = async (email: string, password: string) => {
//     try {
//       const res = await fetch("https://clinica-08df.onrender.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           accept: "*/*",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!res.ok) {
//         throw new Error("Credenciales incorrectas");
//       }

//       const data = await res.json();

//       const loggedUser = {
//         id: data.id,
//         email: data.email,
//       };

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(loggedUser));

//       setUser(loggedUser);
//       setToken(data.token);
//     } catch (error) {
//       console.error("Error en login:", error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     setToken(null);
//   };

//   const isAuthenticated = !!token;

//   return (
//     <AuthContext.Provider
//       value={{ user, token, login, logout, isAuthenticated }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
