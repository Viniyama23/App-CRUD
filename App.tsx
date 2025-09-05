import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./src/screens/UserList";
import UserForm from "./src/screens/UserForm";
import { UsersProvider } from "./src/context/UsersContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
  name="UserList" 
  component={UserList} 
  options={{ 
    title: "Lista de Usuários",
    headerStyle: {
      backgroundColor: '#ed145b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }} 
/>
          <Stack.Screen name="UserForm" component={UserForm} options={{ title: "Formulário de Usuários" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}
