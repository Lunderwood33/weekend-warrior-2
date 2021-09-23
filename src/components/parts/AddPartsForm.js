import React, { useState } from "react"

export const AddParts = () => {
    const [parts, updateParts] = useState({

        vehicleId: parseInt(),
        name: "",
        miles: parseInt()
       
        
    });

    const submitParts = (event) => {
        const newRecord = {
            vehicleId: parts.vehicleId,
            name: parts.name,
            miles: parts.miles,
            userId: parseInt(localStorage.getItem("weekendWarrior_user_id"))
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify[newRecord]
        }
        event.preventDefault()
    }

    return (
        <form className="addParts">
            <h2 className="addParts__title">Add New Part</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="vehicleId">Vehicle:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...parts}
                                copy.vehicleId = event.target.value
                                updateParts(copy)
                            }
                        }
                        required autoFocus
                        type="dropdown"
                        className="form-control"
                        placeholder="Select Vehicle"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Part:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...parts}
                                copy.serviceType = event.target.value
                                updateParts(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Part Installed"
                         />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="miles">Miles:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...parts}
                                copy.miles = event.target.value
                                updateParts(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Current Miles on Vehicle"
                         />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={submitParts}>
                Submit Parts
            </button>
            {/* <button className="btn btn-primary" onClick={submitParts}>
                Clear
            </button> */}
        </form>
    )
}