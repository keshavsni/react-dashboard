import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbboard from "./Dashboard";
import AddApplication from "./application/AddApplication";
import Application from "./application/ApplicationList";
import ApplicationDetail from "./application/ApplicationDetail";
import Login from "./Login";
import Test from "./Test";

import "./assets/css/phoenix.min.css";
import "./assets/css/user.min.css";
import Test2 from "./Test2";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashbboard />} />
          <Route path="/add-application" element={<AddApplication />} />
          <Route path="/application-list" element={<Application />} />
          <Route path="/application-detail" element={<ApplicationDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2/>} />
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;
