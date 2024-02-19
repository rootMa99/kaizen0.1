
import './App.css';
import { Suspense} from "react";
import NavBar from './component/ui/NavBar';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './component/home/Home';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense>
          <Routes>
            <Route index path="/" element={<Navigate replace to="/home" />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
