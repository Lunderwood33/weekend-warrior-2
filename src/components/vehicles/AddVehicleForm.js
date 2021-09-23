import React, { useState } from "react"

export const AddVehicleForm = () => {
    const [vehicleForm, updateVehicleForm] = useState({

        vehicleYear: parseInt(),
        vehicleMake: "",
        vehicleModel: "",
        
    });

    const submitVehicleForm = (event) => {
        const newVehicle = {
            vehicleYear: vehicleForm.vehicleYear,
            vehicleMake: vehicleForm.vehicleMake,
            vehicleModel: vehicleForm.vehicleModel,
            userId: parseInt(localStorage.getItem("weekendWarrior_user_id"))
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify[newVehicle]
        }
        event.preventDefault()
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
            
            <button className="btn btn-primary" onClick={submitVehicleForm}>
                Submit Vehicle
            </button>
        </form>
    )
}