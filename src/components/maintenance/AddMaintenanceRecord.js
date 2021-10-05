import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "./Maintenance.css"

export const AddMaintenanceRecord = () => {
    
    const [vehicles, setVehicles] = useState([])
    const userId = parseInt(localStorage.getItem("weekendWarrior_user_id"))
    const history = useHistory()
    

    const vehicleUserListFetcher = () => {
        fetch(`http://localhost:8088/vehicles?userId=${userId}&_expand=user`)
        .then(res => res.json())
                .then((data) => {
                    setVehicles(data)
                })
            }
            useEffect(
                () => {
                    
                        vehicleUserListFetcher()
                },
                []
            )
    
    
    const [maintenanceRecord, updateMaintenanceRecord] = useState({

        serviceType: "",
        vehicleId: "",
        miles: parseInt(),
        
    });

    const submitMaintenanceRecord = (event) => {
        const newRecord = {
            serviceType: maintenanceRecord.serviceType,
            vehicleId: parseInt(maintenanceRecord.vehicleId),
            miles: maintenanceRecord.miles,
            userId: parseInt(localStorage.getItem("weekendWarrior_user_id"))
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecord)
        }
        return fetch("http://localhost:8088/maintenance", fetchOption)
        // .then(response => response.json())
        .then(() => {
            history.push("/")
        })
    }

    return (
        <form className="addMaintenanceRecord">
            <h2 className="addMaintenanceRecord__title">Add New Maintenance Record</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="vehicleId">Vehicle:</label>
                    <select
                        onChange={
                            (event) => {
                                const copy = {...maintenanceRecord}
                                copy.vehicleId = event.target.value
                                updateMaintenanceRecord(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Select Vehicle"
                         > 
                             return (
        <>
        <option>Select Vehicle</option>
            {
                vehicles.map(
                    (vehicle) => {
                        return <option key={`vehicle--${vehicle.id}`} value={vehicle.id}>{`${vehicle.vehicleYear} ${vehicle.vehicleMake} ${vehicle.vehicleModel}`}</option>
                    },
                    // ` <option>name="selectedVehicle" value="vehicle--${vehicle.id}">${vehicle.name}</option>`
                    )
                }
        </>
    )
                         </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="serviceType">Service Type:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...maintenanceRecord}
                                copy.serviceType = event.target.value
                                updateMaintenanceRecord(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type of Service"
                         />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="miles">Miles:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...maintenanceRecord}
                                copy.miles = event.target.value
                                updateMaintenanceRecord(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Current Miles on Vehicle"
                         />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={submitMaintenanceRecord}>
                Submit Maintenance Record
            </button>
            <button className="btn btn-primary" onClick={() => {
                    history.push(`/`)
                }}>Cancel</button>
        </form>
    )
}