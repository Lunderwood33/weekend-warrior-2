import React from "react";
// import { FishProvider } from "./fish/FishProvider.js";
import { UserProvider } from "./users/UserProvider.js";
// import { UserProfile } from "./users/UserProfile.js"
import { VehicleList } from "./vehicles/VehicleList.js"
import { PartsList } from "./parts/PartsList.js"
import { Route } from "react-router-dom";



export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                    
                {/* <FishProvider> */}

                    <Route  path="/users/profile/:userId(\d+)">
                        
                        
                    </Route>
                    <Route exact path= "/vehicles">
                        <VehicleList />
                        </Route>
                    <Route exact path= "/parts">
                        <PartsList />
                        </Route>

                {/* </FishProvider> */}
            </UserProvider>

        </>
    )
}