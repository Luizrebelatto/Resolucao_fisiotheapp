import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MainScreen from './pages/Main';
import ExerciseScreen from './pages/Exercise';

const Tab =  createBottomTabNavigator();


const icons = {
  Main:{
    lib:Icon,
    name:"folder"
  },
  Chat:{
    lib:Icon,
    name:"chat-processing"
  },
  Exercise:{
    lib:Icon,
    name:"book"
  }
}

export default function Routes(){
  return(
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({color,size})=>{
            const {lib: Icon, name} = icons[route.name];
            return <Icon name={name} size={size} color={color}/>
          },
        })}
      >
        <Tab.Screen name="Main" component={MainScreen} options={{title:''}}/>
        <Tab.Screen name="Chat" component={MainScreen} options={{title:''}}/>
        <Tab.Screen name="Exercise" component={ExerciseScreen} options={{title:''}}/>
      </Tab.Navigator>
  )
}
