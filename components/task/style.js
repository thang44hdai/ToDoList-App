import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,

  },
  header: {
    fontSize: 38,
    color: "#77178a",
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginRight: 25,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "red",
  },
  square: {
    borderRadius: 8,
    alignItem: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  even: {
    backgroundColor: "red",
  },
  odd: {
    backgroundColor: "#41e857",
  },
  number: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  content: {
    width: "82%",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 30,
    height: 30,
    top: 90,
    left: 210,
    position: "relative",
  },
  
 
  
});

export default styles;
