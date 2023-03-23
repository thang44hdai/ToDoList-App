import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
const Input = (props) => {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.length == 0) alert("Xin mời nhập lại");
    else {
      props.onAddTask(task);
      setTask("");
    }
  };
  return (
    <View style={styles.addTask}>
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Xin mời bạn nhập"
        style={styles.input}
      ></TextInput>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
