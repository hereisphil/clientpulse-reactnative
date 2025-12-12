import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/appstyles";
import Heading from "./ui/Heading";
import ParagraphText from "./ui/ParagraphText";

export default function Hero() {
  return (
    <SafeAreaView style={styles.flexColumnContainer}>
      <Heading level={1}>Your clients.</Heading>
      <Heading level={1} color="orange">
        Your projects.
      </Heading>
      <Heading level={1}>One pulse.</Heading>
      <ParagraphText>
        The App built for freelance web developers. Track clients, manage
        projects, send invoices, and grow your business.
      </ParagraphText>
    </SafeAreaView>
  );
}
