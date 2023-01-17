import { useState } from "react"
import { CharacterContext } from "./CharacterContexts"

export const CharacterProvider = ({ children }) => {
  
    // Provitional COntext
    // const [Character, setCharacter] = useState({});

    return (
    <CharacterContext.Provider value={null}>
        {children}
    </CharacterContext.Provider>
    )
}