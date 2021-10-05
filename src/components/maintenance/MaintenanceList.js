import React, { useEffect, useState } from "react"

export const VehiclesMaintenanceList = () => {
    const [vehiclesMaintenance, setVehiclesMaintenance] = useState([])
    
    const userId = parseInt(localStorage.getItem("weekendWarrior_user_id"))
    
    
    const vehicleMaintenanceListUsersFetcher = () => {
        fetch(`http://localhost:8088/vehicles?userId=${userId}&_embed=maintenance`)
        .then(res => res.json())
                .then((data) => {
                    setVehiclesMaintenance(data)
    })
}

    const vehicleMaintenanceFetcher = () => {
        fetch(`http://localhost:8088/maintenance?_expand=user&_expand=vehicle`)
        .then(res => res.json())
                .then((data) => {
                    vehicleMaintenanceFetcher(data)
    })
    }
    
    
    
    useEffect(
        () => {
                vehicleMaintenanceListUsersFetcher()
                
        },
        []
    )

    const deleteMaintenanceItem = (id) => {
        fetch(`http://localhost:8088/maintenance/${id} `, {
            method: "DELETE"
        })
        .then(() => {
            window.location.reload(false);
        })
    }

    return (
        <>
            <div className="maintenanceList">
            {
                vehiclesMaintenance.map(
                    (vehicleMaintenance) => {
                       return <>  {vehicleMaintenance.maintenance.length > 0?
                    
                       <>
                       {console.log(vehicleMaintenance)}
                         
                        <h2>{vehicleMaintenance.vehicleYear} {vehicleMaintenance.vehicleMake} {vehicleMaintenance.vehicleModel}</h2>
                        <ul>
                            {
                                vehicleMaintenance.maintenance?.map(
                                    (service) => {
                                        return <> <li>
                                            {service.serviceType} at {service.miles} miles.
                                            <button color="primary" onClick={() => {
                                            deleteMaintenanceItem(service.id)
                                        }}>Delete</button>
                                        </li> </>
                                    }
                                )
                            }
                        </ul>

                        </>
                        : ""} </>
                        
                    }
                )
            }
            </div>
        </>
    )
}