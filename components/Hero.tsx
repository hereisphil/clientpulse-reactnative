import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/appstyles";
import Heading from "./ui/Heading";

export default function Hero() {
  return (
    <SafeAreaView style={styles.flexColumnContainer}>
      <Heading level={1}>Your clients.</Heading>
      <Heading level={1} color="orange">
        Your projects.
      </Heading>
      <Heading level={1}>One pulse.</Heading>
      <Text style={styles.paragraphText}>
        The App built for freelance web developers. Track clients, manage
        projects, send invoices, and grow your business.
      </Text>
    </SafeAreaView>
  );
}
