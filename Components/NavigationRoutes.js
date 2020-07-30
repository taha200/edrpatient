import React from "react";
import {Icon} from 'react-native-elements'
import FIcon from 'react-native-vector-icons/Fontisto'
import {createStackNavigator,createAppContainer,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {Dimensions} from "react-native";
import Filter from './Filter';
import SplashScreen from "./SplashScreen";
import SearchDocSplash from './SearchDocSplash'
import BookAppointmentSplash from './BookAppointmentSplash'
import BookDoctorSplash from './BookDoctorSplash'
import SignInAndSignUp from './SignInAndSignUp'
import SearchDoctors from './SearchDoctors'
import DoctorsList from './DoctorsList'
import DoctorDetail from './DoctorDetail'
import TodaySlot from './TodaySlot'
import FindTimeSlot from './FindTimeSlot'
import BookDocForm from './BookDocForm'
import BookingComplete from './BookingComplete'
import UpCommingApp from './UpCommingApp'
import PastAppointment from './PastAppointment'
import MyDoctors from './MyDoctors'

import Home from './Home'
import Chat from './Chat'
import Account from './Account'
import VideoCall from './VideoCall'
import Conversation from './Conversation'
const LogInStackNav = createStackNavigator({

    SplashScreen:{
        screen:SplashScreen
    },
    SearchDocSplash:{
        screen:SearchDocSplash
    },
    BookAppointmentSplash:{
        screen:BookAppointmentSplash
    },
    BookDoctorSplash:{
        screen:BookDoctorSplash
    },
    SignInAndSignUp:{
        screen:SignInAndSignUp
    },
    SignIn:{
        screen:SignIn
    },
    SignUp:{
        screen:SignUp
    },

},
{
    headerMode:'none'
}
)

const HomeStack = createStackNavigator({

    Home:{
        screen:Home
    },
    SearchDoctors:{
        screen:SearchDoctors
    },
    Filter:{
        screen:Filter
    },
    DoctorsList:{
        screen:DoctorsList
    },
    DoctorDetail:{
        screen:DoctorDetail
    },
    TodaySlot:{
        screen:TodaySlot
    },
    FindTimeSlot:{
        screen:FindTimeSlot
    },
    BookDocForm:{
        screen:BookDocForm
    },
    BookingComplete:{
        screen:BookingComplete
    },
    UpCommingApp:{
        screen:UpCommingApp
    },
    PastAppointment:{
        screen:PastAppointment
    }
},
{
    headerMode:'none'
}
)

HomeStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = false;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Home' || routeName === 'UpCommingApp' || routeName === 'PastAppointment' ) {
        tabBarVisible = true
    }
    return {
        tabBarVisible,
    }
}

const ChatStack = createStackNavigator({

    Conversation:{
        screen:Conversation
    },
    Chat:{
        screen:Chat
    },
    VideoCall:{
        screen:VideoCall
    }
},
{   
    headerMode:'none'
}
)

ChatStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = false;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Chat'|| routeName == "VideoCall" ) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}



const AccountStack = createStackNavigator({

    Account:{
        screen:Account
    },
    MyDoctors:{
        screen:MyDoctors
    },
    UpCommingApp:{
        screen:UpCommingApp
    },
    PastAppointment:{
        screen:PastAppointment
    }
},
{
    headerMode:'none'
}
)

AccountStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = false;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Account'){
        tabBarVisible = true
    }
    return {
        tabBarVisible,
    }
}

const TabNav = createBottomTabNavigator({
    Home:{
        screen:HomeStack,
        navigationOptions:{
            tabBarIcon:({focused})=><Icon  type="FontAwesome" name="tv" color={focused ? "#3265b0" : '#ced1e2' } />,
            tabBarOptions:{
                activeTintColor:'black',
                inactiveTintColor:'lightgray'
            }
        }
    },
    Chat:{
        screen:ChatStack,
        navigationOptions:{
            tabBarIcon:({focused})=><FIcon name="hipchat" size={25} color={focused ? "#3265b0" : '#ced1e2' } />,
            tabBarOptions:{
                activeTintColor:'black',
                inactiveTintColor:'lightgray'
            }
        }
    },
    Account:{
        screen:AccountStack,
        navigationOptions:{
            tabBarIcon:({focused})=><Icon  type="antdesign" name="user" color={focused ? "#3265b0" : '#ced1e2' } />,
            tabBarOptions:{
                activeTintColor:'black',
                inactiveTintColor:'lightgray'
            }
        }
    }
    
},

{
   tabBarOptions:{
    style: {
        backgroundColor: 'blue',
        height: 43,
      }
   }


})



const RootNav = createSwitchNavigator({
    LogInStackNav:LogInStackNav,
    TabNav:TabNav
})


export default createAppContainer(RootNav);