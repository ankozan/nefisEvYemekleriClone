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
const DeviceWidth = Dimensions.get("window").width;

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
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.menuItems}>
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.menuItem}>
                <Image
                  style={styles.menuLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
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
    justifyContent: "center",
  },
  menuItems: {
    flexDirection: "row",
    backgroundColor: "orange",
  },
  menuLogo: {
    marginLeft: 30,
    width: 30,
    height: 30,
  },
});
