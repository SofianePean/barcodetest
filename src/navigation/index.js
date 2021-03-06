import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from '@expo/vector-icons';

// Import components
import Home from "../components/Home";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const HomeTabs = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray",
//       }}
//       screenOptions={
//         ({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let icon 
//             if (route.name === 'Liste des recettes') {
//               icon = "list"
//             } else if (route.name === 'Connexion'){
//               icon = "log-in"
//             } else {
//               icon = "build-outline"
//             }

//             return <Ionicons name={icon} size={24} color={color} />
//           }
//         })
//       }
//     >
//       <Tab.Screen name="Liste des recettes" component={Recipes} />
//       <Tab.Screen name="Compte" component={Account} />
//       <Tab.Screen name="Connexion" component={Login} />
//     </Tab.Navigator>
//   );
// };
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      >
        <Stack.Screen name="Accueil" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
  },
});

export default AppNavigation;