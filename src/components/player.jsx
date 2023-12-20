import { useState } from "react"

export default function  Player({initialName,symbol}){
const [playerName, setPlayerName] = useState(initialName)
const [isEditing, setIsEditing] = useState(false);

function handleEdit(){
    setIsEditing((editing) => !editing)

}
function handleChange(event){
    setPlayerName(event.target.value)
}

let EditablePlayerName = <span className="player-name">{playerName}</span>
let btnCaption = 'Edit'
if (isEditing){
    EditablePlayerName =  <input type="text" required value={playerName} onChange={handleChange} />
    btnCaption = 'Save'
} 

    return (
        <li>
            <span className="player">
             {EditablePlayerName}
              
              <span className="player-symbol">{symbol}</span>
            </span> 
            <button onClick={handleEdit}>{btnCaption}</button>
          </li>
    )
}