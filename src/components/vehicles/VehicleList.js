import React, { useEffect, useState } from "react"
// import { UserList } from "../users/UserList"



export const VehicleList = () => {
    const [vehicles, setVehicles] = useState([])
    const [totalVehicleMessage, updateMessage] = useState("")
    const userId = parseInt(localStorage.getItem("weekendWarrior_user_id"))
    
    
    
    const userFetcher = () => {
        fetch(`http://localhost:8088/vehicles?userId=${userId}&_expand=user`)
        .then(res => res.json())
                .then((data) => {
                    setVehicles(data)
    })
}
useEffect(
    () => {
        fetch("http://localhost:8088/vehicles")
            .then(res => res.json())
            .then((data) => {
                setVehicles(data)
            })
            userFetcher()
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