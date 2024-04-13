import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
    <ImageBackground 
    style={styles.background}
    source={require("../../assets/background.jpg")}
    >
    <View style={styles.logoContainer}>
        
    <Image style={styles.logo}  source={require("../../assets/splash.png")} />
    <Text style={styles.text}> Welcome to Grape </Text>
    </View>
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
    </ImageBackground>
    );
}
const styles = StyleSheet.create({
background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
},
logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 70,
    alignSelf: 'center'
},
logoContainer: {
    position: 'absolute',
    top: 70,
},
text: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 230,
    alignSelf: 'center',
    color: 'white'

},
loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#61677A'
},
registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#F8F4EC'
},
  });
export default WelcomeScreen;