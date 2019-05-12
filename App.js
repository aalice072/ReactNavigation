import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
/*
  npm install --save react-navigation
  npm install --save react-native-gesture-handler
  react-native link react-native-gesture-handler
*/
export class HomeScreen extends Component {

  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor:'#f45134'
    },
    headerTitleStyle:{
      color:'#fff'
    }
  }
  

  render() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home HomeScreen</Text>
      <Button title="Go to Next Screen" 
      onPress={()=>{this.props.navigation.navigate('Next') }}></Button>
    </View>
  }
}

export class NextScreen extends Component {
  static navigationOptions = {
    title: "NEXT"
  }
  render() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Next Screen</Text>
    </View>
  }
}

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Next: {
      screen: NextScreen
    },
  },
  {
    initialRouteName:'Home'
  }
)

const MyAppContainer = createAppContainer(Routes)

export default class App extends Component{
  render(){
    return <MyAppContainer/>
  }
}




