import React from "react";
// import { FishProvider } from "./fish/FishProvider.js";
import { UserProvider } from "./users/UserProvider.js";
// import { UserProfile } from "./users/UserProfile.js"

import { Route } from "react-router-dom";



export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
        
                {/* <FishProvider> */}

                    <Route exact path="/users/profile/:userId(\d+)">
                        
                        {/* <UserList /> */}
                        
                    </Route>
                    

                {/* </FishProvider> */}
            </UserProvider>

        </>
    )
}