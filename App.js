

import { MD3LightTheme, PaperProvider, Text } from 'react-native-paper';
import { MessagesContext, UserContext } from './components/Home';
import { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ListOfworkouts from './components/ListOfworkouts';
import AddWorkout from './components/AddWorkout';
import Setting from './components/Settings';
import { styles } from './style/Styles';



export default function App() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  return (
    <UserContext.Provider value={{username, setUsername}}>
      <MessagesContext.Provider value={{messages, setMessages}}>
        <PaperProvider theme={MD3LightTheme}>
          <Navigation/>
        </PaperProvider>
      </MessagesContext.Provider>
    </UserContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation (){
  return[
    <NavigationContainer>
      <Tab.Navigator style={styles.container}>
        <Tab.Screen name='Add workout' component={AddWorkout}/>
        <Tab.Screen name='List of workouts' component={ListOfworkouts}/>
        <Tab.Screen name='Settings' component={Setting}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  ]

}
