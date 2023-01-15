import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Character } from "../pages"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="*" element={<Character />}/>
        <Route path="game" element={<App />}/>
    </Routes>
  )
}
