import { StatusBar } from "expo-status-bar";
import reactDom from "react-dom";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder={"@  Ara"} />
        <View style={styles.headerImage}>
          <Text style={styles.headerImageText}>
            IMAGE HERE IMAGE HERE IMAGE HERE IMAGE HERE
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "60%",
    backgroundColor: "#cc2e38",
    alignItems: "center",
  },
  input: {
    position: "absolute",
    top: 30,
    width: "90%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  headerImage: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    marginTop: 70,
    alignContent: "center",
    justifyContent: "center",
  },
});
