import React, { useState } from 'react'



const Player = ({ intialName, symbol, onChangeName, isActive }) => {
    const [isEdit, setEdit] = useState(false)
    const [playerName, setPlayerName] = useState(intialName)

    const handleEditBtn = () => {
        setEdit(wasEdit => !wasEdit)

        if(isEdit){
            onChangeName(symbol, playerName)
        }
    }

    const handelChangeName = (event) =>{
        setPlayerName(event.target.value);

    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';
  
    if (isEdit) {
      editablePlayerName = (
        <input type="text" required value={playerName} onChange={handelChangeName} />
      );
      // btnCaption = 'Save';
    }


    return (

        <li className={isActive ? "active" : undefined}>
            <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
            <button onClick={handleEditBtn}>{isEdit ? "Save" : "Edit"}</button>
        </li>

    )
}

export default Player