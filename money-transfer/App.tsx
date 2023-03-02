import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/stacks/AppStack";
import { FormContextProvider } from "./src/data/form-context";

export default function App() {
    return (
        <NavigationContainer>
            <FormContextProvider>
                <AppStack />
            </FormContextProvider>
        </NavigationContainer>
    );
}
