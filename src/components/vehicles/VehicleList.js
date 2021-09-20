import React, { useEffect, useState } from "react"
// import { UserList } from "../users/UserList"



export const VehicleList = () => {
    const [vehicles, setVehicles] = useState([])
    const [totalVehicleMessage, updateMessage] = useState("")
    const userId = parseInt(localStorage.getItem("weekendWarrior_user_id"))
    
    
    
    const vehicleListUsersFetcher = () => {
        fetch(`http://localhost:8088/vehicles?userId=${userId}&_expand=user`)
        .then(res => res.json())
                .then((data) => {
                    setVehicles(data)
    })
}
useEffect(
    () => {
        
            vehicleListUsersFetcher()
    },
    []
)
    

    useEffect(
        () => {
            if (vehicles.length === 1) {
                updateMessage("You have one vehicle")
            }
            else {
                updateMessage(`You have ${vehicles.length} vehicles`)
            }
        },
        [vehicles]
    )

//Find the matching vehicle
// Filter the parts based on the specific found vehicle

    

    return (
        <>
        <div>{totalVehicleMessage}</div>
            {
                vehicles.map(
                    (vehicle) => {
                        return <p key={`vehicle--${vehicle.id}`}>{`${vehicle.vehicleYear} ${vehicle.vehicleMake} ${vehicle.vehicleModel}`}</p>
                    }
                )
            }
        </>
    )
}