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
});

export default appstyles;
