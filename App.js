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
  Image,
} from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder={"@  Ara"} />
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          }}
        />

        <View style={styles.menu}>
          <View style={styles.menuItems}>
            <MenuItem text={"Videolar"} />
            <MenuItem text={"Tarifler"} />
            <MenuItem text={"Menuler"} />
            <MenuItem text={"Trend"} />
          </View>
          <View style={styles.menuItems}>
            <MenuItem text={"Iftar Menuleri"} />
            <MenuItem text={"Puding Yarismasi"} />
            <MenuItem text={"Blog"} />
            <MenuItem text={"Bugun Ne Pisirsem"} />
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

  menuItems: {
    flexDirection: "row",
    backgroundColor: "orange",
  },
});
