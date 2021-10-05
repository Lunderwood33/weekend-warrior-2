import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "./PartsList.css"

export const AddParts = () => {
    
    const [parts, setParts] = useState([])
    const userId = parseInt(localStorage.getItem("weekendWarrior_user_id"))
    const history = useHistory()
    

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
    
    
    const [part, updatePart] = useState({

        name: "",
        vehicleId: "",
        miles: parseInt(),
        
    });

    const submitNewPart = (event) => {
        const newPart = {
            name: part.name,
            vehicleId: parseInt(part.vehicleId),
            miles: part.miles,
            userId: parseInt(localStorage.getItem("weekendWarrior_user_id"))
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPart)
        }
        return fetch("http://localhost:8088/parts", fetchOption)
        // .then(response => response.json())
        .then(() => {
            history.push("/")
        })
    }

    return (
        <form className="addNewPart">
            <h2 className="addNewPart__title">Add New Part</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="vehicleId">Vehicle:</label>
                    <select
                        onChange={
                            (event) => {
                                const copy = {...part}
                                copy.vehicleId = event.target.value
                                updatePart(copy)
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
                parts.map(
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
                    <label htmlFor="name">Part Added:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...part}
                                copy.name = event.target.value
                                updatePart(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Part Description"
                         />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="miles">Miles:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...part}
                                copy.miles = event.target.value
                                updatePart(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Current Miles on Vehicle"
                         />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={submitNewPart}>
                Submit Part
            </button>
            <button className="btn btn-primary" onClick={() => {
                    history.push(`/`)
                }}>Cancel</button>
        </form>
    )
}