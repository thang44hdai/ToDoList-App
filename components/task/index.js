import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
const Task = (props) => {
  const { number } = props;
  const number_text = number < 10 ? `0${number}` : number;
  const check = number % 2 === 1 ? styles.even : styles.odd;
  return (
    <View>
      <TouchableOpacity onPress={props.onDeleteTask}>
        <View style={styles.item}>
          <View style={[styles.square, check]}>
            <Text style={styles.number}>{number_text}</Text>
          </View>
          <Text style={styles.content}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
