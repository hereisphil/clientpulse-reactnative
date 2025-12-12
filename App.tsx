import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import type { RootStackParamList } from "./utils/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "ClientPulse" }}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
