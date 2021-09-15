import React from "react";
// import { FishProvider } from "./fish/FishProvider.js";
import { UserProvider } from "./users/UserProvider.js";
// import { UserProfile } from "./users/UserProfile.js"

import { Route } from "react-router-dom";
// import { NavBar } from "./navigation/NavBar";


export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
        <h1>Weekend Warrior</h1>
                {/* <FishProvider> */}

                    <Route exact path="/users/profile/:userId(\d+)">
                        {/* <NavBar /> */}
                        {/* <UserList /> */}
                        
                    </Route>
                    

                {/* </FishProvider> */}
            </UserProvider>

        </>
    )
}