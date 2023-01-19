import { Navigate, Route, Routes } from "react-router-dom"
import App from "../App"
import { Character } from "../pages"

export const AppRouter = () => {
  return (
    <Routes>
        {/* Fix In smartPhone */}
        <Route path="/*" element={<Navigate to="/"/>}/>

        <Route path="/" element={<Character />}/>
        <Route path="game/:isaac" element={<App />}/>
    </Routes>
  )
}
