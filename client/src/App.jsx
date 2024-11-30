import "./App.css";
import { Outlet } from "react-router-dom";
import Navber from "./Components/Header/Navber";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("isDarkMood")));
  
  return (
    <Provider store={store} >
      <div className={`max-w-screen-xl mx-auto  md:px-20 px-10 ${isDarkMode ? "bg-gray-950":""}`}>
        <Navber theme={[isDarkMode, setDarkMode]}/>
        <main className="mt-8 min-h-screen">
          <Outlet context={isDarkMode}/>
        </main>
        <footer><Footer isDarkMode={isDarkMode}/></footer>
      </div>
    </Provider>
  );
}

export default App; 