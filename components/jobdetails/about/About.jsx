import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

const JobAbout = ({ info }) => {
  console.log("INFO = ", info);
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About a job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default JobAbout;
