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
    // SUBSCRIBE TO THE ACCELEROMETER LISTENER TO GET DEVICE MOVEMENT DATA AND UPDATE X, Y, Z ACCORDINGLY
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove(); // CLEAN UP FUNCTION TO REMOVE LISTENER
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACCELEROMETER</Text>
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

  title: {
    color: "#ff3333",
    fontWeight: "bold",
    marginVertical: 2,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 2,
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
