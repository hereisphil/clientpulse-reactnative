import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/ui/Heading";
import ParagraphText from "../components/ui/ParagraphText";
import fetchAllClients from "../services/fetchAllClients";
import styles from "../styles/appstyles";
import type { Client, RootStackParamList } from "../utils/types";

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Dashboard"
>;

export default function Dashboard({ navigation }: DashboardScreenProps) {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    // HA! Use an IIFE is so much cleaner!!
    (async () => {
      try {
        const clients = await fetchAllClients();
        console.log(clients);
        setClients(clients);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Heading level={1}>Dashboard</Heading>
      <Button
        title="Go back Home"
        onPress={() => navigation.navigate("Home")}
      />
      {clients &&
        clients.map((client) => <ParagraphText>{client.name}</ParagraphText>)}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
