import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/ui/Heading";
import styles from "../styles/appstyles";
import type { RootStackParamList } from "../utils/types";

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Dashboard"
>;

export default function Dashboard({ navigation }: DashboardScreenProps) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Heading level={1}>Dashboard</Heading>
      <Button
        title="Go back Home"
        onPress={() => navigation.navigate("Home")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
