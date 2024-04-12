import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
  Button,
  Platform,
  useWindowDimensions
} from "react-native";


export default function App() { 
  console.log(Dimensions.get('screen'));
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: '100%',
        height: '30%',  
      }}>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
