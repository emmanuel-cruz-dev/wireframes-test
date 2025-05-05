import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./store/authStore";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
