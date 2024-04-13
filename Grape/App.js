import {
  useWindowDimensions
} from "react-native";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";


export default function App() { 
  console.log(useWindowDimensions())
  // console.log(Dimensions.get('screen'));
  return (

<WelcomeScreen />
   
  );
}

