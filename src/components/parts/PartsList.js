import React, { useEffect, useState } from "react"

export const PartsList = () => {
    const [parts, setParts] = useState([])
    
    const userId = parseInt(localStorage.getItem("weekendWarrior_user_id"))
    
    
    const partsListUsersFetcher = () => {
        fetch(`http://localhost:8088/vehicles?userId=${userId}&_embed=parts`)
        .then(res => res.json())
                .then((data) => {
                    setParts(data)
    })
}
    
    
    
    useEffect(
        () => {
                partsListUsersFetcher()
                
        },
        []
    )

    

    return (
        <>
            
            {
                parts.map(
                    (part) => {
                       return <> {part.parts.length > 0? 
                         <>
                        <h2>{part.vehicleMake} {part.vehicleModel}</h2>
                        <ul>
                            {
                                part.parts?.map(
                                    (item) => {
                                        return (<li>
                                            {item.name}
                                        </li>)
                                    }
                                )
                            }
                        </ul>

                        </>
                        : ""} </>
                    }
                )
            }
        </>
    )
}