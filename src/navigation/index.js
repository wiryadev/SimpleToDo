import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddToDoScreen from "../screens/AddToDo"
import DetailScreen from "../screens/Detail"
import HomeScreen from "../screens/Home"

const Stack = createNativeStackNavigator()

export default Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
      />
      <Stack.Screen
        name="AddToDoScreen"
        component={AddToDoScreen}
      />
    </Stack.Navigator>
  )
}