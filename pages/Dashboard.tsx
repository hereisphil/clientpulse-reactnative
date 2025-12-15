import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/ui/Heading";
import deleteClient from "../services/deleteClient";
import fetchAllClients from "../services/fetchAllClients";
import styles from "../styles/appstyles";
import type { Client, RootStackParamList } from "../utils/types";

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Dashboard"
>;

export default function Dashboard({ navigation }: DashboardScreenProps) {
  const [message, setMessage] = useState("");
  const [reload, setReload] = useState(0);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setMessage("");
      try {
        const response = await fetchAllClients();
        if (!response) {
          setClients([]);
          return Alert.alert("Something went wrong. No clients loaded");
        } else if (response === 1) {
          setClients([]);
          setMessage(
            "No clients found. You may add a client with the form below."
          );
        } else if (response === 2) {
          setClients([]);
          Alert.alert("Something went wrong. No clients loaded");
          setMessage("Something went wrong. No clients loaded");
        } else {
          setClients(response.clients);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [reload]);

  const handleDelete = async (id: string) => {
    const response = await deleteClient(id);
    console.log("Response >>>", response);
    if (response) {
      Alert.alert("Successfully deleted");
      setReload((state) => state + 1);
    } else {
      Alert.alert("Something went wrong");
    }
  };

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
            <Button onPress={() => handleDelete(client._id)} title="Delete" />
          </View>
        ))
      )}
      {message && <Text style={styles.loadingText}>{message}</Text>}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
