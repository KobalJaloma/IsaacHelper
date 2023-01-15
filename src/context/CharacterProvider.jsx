import { useState } from "react"
import { CharacterContext } from "./CharacterContexts"

export const CharacterProvider = ({ children }) => {
  
    const [Character, setCharacter] = useState({});

    return (
    <CharacterContext.Provider value={{Character, setCharacter}}>
        {children}
    </CharacterContext.Provider>
    )
}