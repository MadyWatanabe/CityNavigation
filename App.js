import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Use the following code in cmd to delay the SplashScreen: npx expo install expo-splash-screen
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/art.png')} />
    </View>
  );
}

function Magnicent({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/mile.png')} />
    </View>
  );
}

function NavyPier({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/pier.png')} />
    </View>
  );
}

function WaterTower({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/water.png')} />
    </View>
  );
}

function WillisTower({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/willis.png')} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home">
         {/* The options will show the text component at the top of the screen */}
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Art Institute of Chicago' }} />
        <Drawer.Screen name="Magnificent Mile" component={Magnicent}  options={{ title: 'Magnificent Mile' }} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} options={{ title: 'Navy Pier' }} />
        <Drawer.Screen name="Water Tower" component={WaterTower} options={{ title: 'Water Tower' }} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} options={{ title: 'Willis Tower' }} />
      </Drawer.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 480,
    width: 320,
  }
});
export default App;
