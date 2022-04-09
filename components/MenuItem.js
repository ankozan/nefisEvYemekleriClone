import React from "react";
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

const MenuItem = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.menuItem}>
          <Image
            style={styles.menuLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Text style={styles.menuText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    width: DeviceWidth * 0.25,
    height: DeviceWidth * 0.2,
    marginBottom: 1,
    marginLeft: 1,
    backgroundColor: "#cc2e38",
    justifyContent: "center",
  },
  menuLogo: {
    marginLeft: 30,
    width: 30,
    height: 30,
  },
  menuText: {
    marginLeft: 30,
    marginTop: 5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default MenuItem;
