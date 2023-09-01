
import { createContext, useState } from "react";
import InputForm from "./components/InputForm";


export const InputContext = createContext();
function App() {
  const [inputValue, setInputValue] = useState({
    url: '',
    color: ''
  });
  const value = {
    inputValue,
    setInputValue,
   
  }
  return (
    <div className="bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen pt-10 md:pt-40 px-2">
    <div className="container mx-auto max-w-2xl bg-white rounded-md shadow">
    <div className="md:grid md:grid-cols-3">
    <InputContext.Provider value={value}>
            <InputForm />
           
          </InputContext.Provider>
      </div>
     </div>
    </div>
  );
}

export default App;
