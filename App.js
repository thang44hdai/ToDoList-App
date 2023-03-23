import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "./components/task/style";
import Task from "./components/task/index";
import Input from "./components/form/index";
import Styles from "./components/form/styles";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Bạn muốn gì?????", "Sureeeeee??", [
      {
        text: "Delete",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
      {
        text: "No Delete",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/book-stack.png")} />
      <View style={styles.body}>
        <Text style={styles.header}>To Do List</Text>
        <ScrollView>
          {taskList.map((item, index) => {
            return (
              <Task
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Input onAddTask={handleAddTask}> </Input>
    </View>
  );
}
