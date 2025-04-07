
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import { Authlogin } from "./pages/auth/login";
import { Authregister } from "./pages/auth/register";
const App=()=>{
  return(
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>
        header component

      </h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Authlogin/>}/>
        <Route path="register" element={<Authregister/>}/>
        </Route>
       
      
      </Routes>
    </div>
  )
}
export default App;