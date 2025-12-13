import { StyleSheet } from "react-native";

const appstyles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#f8fafc",
  },

  flexColumnContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
  },

  paragraphText: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#62748e",
    fontSize: 18,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: "#020618",
    alignItems: "center",
  },

  // ALL DASHBOARD CLIENT STYLING IS BELOW
  loadingText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#f59e0b",
    textAlign: "center",
    marginVertical: 14,
  },

  clientCard: {
    backgroundColor: "#f59e0b",
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 26,
    marginVertical: 14,
    width: "90%",
    maxWidth: 360,

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },

    // Android shadow
    elevation: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  label: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0b0f1a",
    marginRight: 12,
  },

  value: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    flexShrink: 1,
    textAlign: "right",
  },
});

export default appstyles;
