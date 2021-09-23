import React, { useState } from "react"

export const AddMaintenanceRecord = () => {
    const [maintenanceRecord, updateMaintenanceRecord] = useState({

        serviceType: "",
        vehicleId: "",
        miles: parseInt(),
        
    });

    const submitMaintenanceRecord = (event) => {
        const newRecord = {
            serviceType: maintenanceRecord.serviceType,
            vehicleId: maintenanceRecord.vehicleId,
            miles: maintenanceRecord.miles,
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
        <form className="addMaintenanceRecord">
            <h2 className="addMaintenanceRecord__title">Add New Maintenance Record</h2>
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
                    <label htmlFor="vehicleId">Vehicle:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...maintenanceRecord}
                                copy.vehicleId = event.target.value
                                updateMaintenanceRecord(copy)
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
            {/* <button className="btn btn-primary" onClick={submitMaintenanceRecord}>
                Clear
            </button> */}
        </form>
    )
}