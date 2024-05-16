import React from 'react'



const TabButton = ({ children, onSelect, isSelected }) => {
// function handleClick(){
//     console.log("hello world")
// }

    return (
        <div>
            <li>
                <button className={isSelected ? "active" : null} onClick={onSelect}>{children}</button>
            </li>

        </div>
    )
}

export default TabButton