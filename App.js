import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

export default function App() {
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>x : {x}</Text>
      <Text style={styles.text}>y : {y}</Text>
      <Text style={styles.text}>z : {z}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Accelerometer.setUpdateInterval(50);
          }}
        >
          <Text style={styles.buttonText}>Fast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Accelerometer.setUpdateInterval(100);
          }}
        >
          <Text style={styles.buttonText}>Normal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Accelerometer.setUpdateInterval(500);
          }}
        >
          <Text style={styles.buttonText}>Slow</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Accelerometer.setUpdateInterval(1000);
          }}
        >
          <Text style={styles.buttonText}>Slower</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f403e",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttonContainer: {
    width: "100%",
    marginTop: 80,
  },

  button: {
    backgroundColor: "#FFB6C1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
