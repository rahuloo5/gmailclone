import React from 'react'
import './SidebarOption.css'

function SidebarOption({Icon , title , number}) {
    console.log(title)
    return (
        <div className="sideBaroption"> 
            <Icon/>
                <h3>{title}</h3>
                <p>{number}</p>

            
            
        </div>
    )
}

export default SidebarOption
