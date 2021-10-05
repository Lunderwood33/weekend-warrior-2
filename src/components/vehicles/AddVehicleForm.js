import React, { useState } from "react"
import { useHistory } from "react-router";
import "./Vehicles.css"

export const AddVehicleForm = () => {
    const [vehicleForm, updateVehicleForm] = useState({

        vehicleYear: "",
        vehicleMake: "",
        vehicleModel: "",
        
    })
    const history = useHistory()

    const submitVehicleForm = () => {
        
        
        const newVehicle = {
            vehicleYear: parseInt(vehicleForm.vehicleYear),
            vehicleMake: vehicleForm.vehicleMake,
            vehicleModel: vehicleForm.vehicleModel,
            userId: parseInt(localStorage.getItem("weekendWarrior_user_id"))
        }
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVehicle)
        }
        
    

        return fetch("http://localhost:8088/vehicles", fetchOption)
        // .then(response => response.json())
        .then(() => {
            history.push("/vehicles")
        })
    }

    return (
        <form className="addVehicleForm">
            <h2 className="addVehicleForm__title">Add New Vehicle</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="vehicleYear">Year:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...vehicleForm}
                                copy.vehicleYear = event.target.value
                                updateVehicleForm(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Year of Vehicle"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="vehicleMake">Make:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...vehicleForm}
                                copy.vehicleMake = event.target.value
                                updateVehicleForm(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Vehicle Make"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="vehicleModel">Model:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...vehicleForm}
                                copy.vehicleModel = event.target.value
                                updateVehicleForm(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Vehicle Model"
                         />
                </div>
            </fieldset>
            
            <button  onClick={() => submitVehicleForm()} className="btn btn-primary">
                Submit Vehicle
            </button>
            <button className="btn btn-primary" onClick={() => {
                    history.push(`/`)
                }}>Cancel</button>
        </form>
    )
}