import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/ui/Heading";
import fetchAllClients from "../services/fetchAllClients";
import styles from "../styles/appstyles";
import type { Client, RootStackParamList } from "../utils/types";

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Dashboard"
>;

export default function Dashboard({ navigation }: DashboardScreenProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // HA! Use an IIFE is so much cleaner!!
    (async () => {
      setIsLoading(true);
      try {
        const clients = await fetchAllClients();
        console.log(clients);
        setClients(clients);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
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
      {isLoading ? (
        <Text style={styles.loadingText}>Loading Clients...</Text>
      ) : (
        clients.map((client) => (
          <View key={client._id} style={styles.clientCard}>
            <View style={styles.row}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{client.name}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Status:</Text>
              <Text style={styles.value}>{client.status}</Text>
            </View>

            {client.serviceType && (
              <View style={styles.row}>
                <Text style={styles.label}>Service:</Text>
                <Text style={styles.value}>{client.serviceType}</Text>
              </View>
            )}

            {client.notes?.length ? (
              <View style={styles.row}>
                <Text style={styles.label}>Notes:</Text>
                <Text style={styles.value} numberOfLines={2}>
                  {client.notes.join(", ")}
                </Text>
              </View>
            ) : null}
          </View>
        ))
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
