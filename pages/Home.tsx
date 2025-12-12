import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hero from "../components/Hero";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Hero />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020618",
    alignItems: "center",
  },
});
