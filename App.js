// Bottom Navs

// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { NavigationContainer } from "@react-navigation/native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Home from "./Screens/Home";
// import Profile from "./Screens/Profile";

// const Tab = createMaterialBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         activeColor="#e91e63"
//         labelStyle={{ fontSize: 12 }}
//         style={{ backgroundColor: "tomato" }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             tabBarLabel: "Home",
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="home" color={color} size={26} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             tabBarLabel: "Profile",
//             tabBarIcon: ({ color }) => (
//               <FontAwesome name="user" color={color} size={26} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// Top Navs

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Profile from "./Screens/Profile";
// import Home from "./Screens/Home";

// const Tab = createMaterialTopTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         style={{
//           marginTop:30,
//         }}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// Stack Navs

// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "./Screens/Home";
// import Profile from "./Screens/Profile";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// drawer navs
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
