import React, { useContext, useState } from "react";
import { Character } from "../components/character/character_interface";

const CharacterContext = React.createContext<Character | null>(null);
const UpdateCharacterContext = React.createContext<(c: Character) => void | null>(null!);

export function useGetCharacter(){
    return useContext(CharacterContext);
}

export function useCharacterUpdate(){
    return useContext(UpdateCharacterContext);
}
                                // better way to handle this with ts 
export function CharacterProvider({children}: any){
    const [contextCharacter, setContextCharacter] = useState<Character | null>(null);

    const updateContextCharacter = (newCharacter: Character): void => {
        setContextCharacter(newCharacter);
    }

    return (
        <CharacterContext.Provider value={contextCharacter}>
            <UpdateCharacterContext.Provider value={updateContextCharacter}>
                {children}
            </UpdateCharacterContext.Provider>
        </CharacterContext.Provider>
    )
}