import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  addTask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 44,
    width: 300,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#77178a",
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  iconWrapper: {
    width: 44,
    height: 44,
    backgroundColor: "#77178a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 1,
  },
  icon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Styles;
