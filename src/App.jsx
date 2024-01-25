import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages";
import Cursor from "./components/Cursor";
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
