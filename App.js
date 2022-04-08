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
  Dimensions,
} from "react-native";
const DeviceWidth = Dimensions.get("window").width;

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
        <View style={styles.menu}>
          <View style={styles.menuItems}>
            <View>
              <View style={styles.menuItem} />
            </View>
            <View>
              <View style={styles.menuItem} />
            </View>
            <View>
              <View style={styles.menuItem} />
            </View>
            <View>
              <View style={styles.menuItem} />
            </View>
          </View>
          <View style={styles.menuItems}>
            <View>
              <View style={styles.menuItem} />
            </View>
            <View>
              <View style={styles.menuItem} />
            </View>
            <View>
              <View style={styles.menuItem} />
            </View>
            <View>
              <View style={styles.menuItem} />
            </View>
          </View>
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
  menuItem: {
    width: DeviceWidth * 0.25,
    height: DeviceWidth * 0.2,
    marginBottom: 1,
    marginLeft: 1,
    backgroundColor: "#cc2e38",
  },
  menuItems: {
    flexDirection: "row",
    backgroundColor: "orange",
  },
});
