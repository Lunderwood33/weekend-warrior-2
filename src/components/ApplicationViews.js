import React from "react";
import { AddVehicleForm } from "./vehicles/AddVehicleForm.js"
import { AddMaintenanceRecord } from "./maintenance/AddMaintenanceRecord.js"
import { UserProvider } from "./users/UserProvider.js";

import { VehicleList } from "./vehicles/VehicleList.js"
import { VehiclesMaintenanceList } from "./maintenance/MaintenanceList.js"
import { PartsList } from "./parts/PartsList.js"
import { Route } from "react-router-dom";
import { AddParts } from "./parts/AddPartsForm.js";
import { ToDoList } from "./toDoList/ToDoList.js";



export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                    

                    <Route  path="/users/profile/:userId(\d+)">
                        
                    </Route>
                        
                        <Route exact path ="/">
                            <ToDoList />
                    <AddVehicleForm />
                    <AddMaintenanceRecord />
                    <AddParts />
                    </Route>
                    
                        
                    <Route exact path= "/vehicles">
                        <VehicleList />
                        </Route>


                    <Route exact path= "/maintenance">
                        <VehiclesMaintenanceList />
                        </Route>
                    <Route exact path= "/parts">
                        <PartsList />
                        </Route>

                
            </UserProvider>

        </>
    )
}