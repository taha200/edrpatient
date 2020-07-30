import React,{Component} from 'react';
import {Button,Input,Text,Image,Icon,Avatar,Divider} from 'react-native-elements';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/FontAwesome5'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';


class Account extends Component{
    render(){
        return (
              <ScrollView style={styles.container}>
                  <View style={{width:wp('100%'),backgroundColor:'#f5f5f5',alignItems:'center'}}>
                    <View style={styles.header}>
                        <View style={{width:'100%',alignItems:'flex-end'}}>
                            <Icon type="antdesign" name="setting" color="white" />
                        </View>
                        <Avatar rounded size={80}
                            source={{
                                uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                            }}
                        />
                        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Jatendra Raut</Text>
                    </View>
                    <View style={styles.body}>
                        <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',padding:20}} onPress={()=>this.props.navigation.navigate('MyDoctors')}>
                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                <MIcon name="doctor" size={25} color='#3265b0' />
                            </View>
                            <View style={{width:'80%'}}>
                                <Text  style={{fontSize:16,color:'#3265b0'}}>My Doctors</Text>
                            </View> 
                        </TouchableOpacity>

                        <Divider style={{marginTop:5,marginBottom:5}} />

                        <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',padding:20}} onPress={()=>this.props.navigation.navigate('UpCommingApp')}>
                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                <Icon type="antdesign" name="calendar" size={25} color='#3265b0' />
                            </View>
                            <View style={{width:'80%'}}>
                                <Text  style={{fontSize:16,color:'#3265b0'}}>My Appointments</Text>
                            </View> 
                        </TouchableOpacity>

                        <Divider style={{marginTop:5,marginBottom:5}} />

                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',padding:20}}>
                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                <MIcon name="doctor" size={25} color='#3265b0' />
                            </View>
                            <View style={{width:'80%'}}>
                                <Text  style={{fontSize:16,color:'#3265b0'}}>My Doctor</Text>
                            </View> 
                        </View>

                        <Divider style={{marginTop:5,marginBottom:5}} />

                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',padding:20}}>
                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                <FIcon name="file-medical" size={25} color='#3265b0' />
                            </View>
                            <View style={{width:'80%'}}>
                                <Text  style={{fontSize:16,color:'#3265b0'}}>Medical Records</Text>
                            </View> 
                        </View>

                        <Divider style={{marginTop:5,marginBottom:5}} />

                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',padding:20}}>
                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                <Icon type="antdesign" name="creditcard" size={25} color='#3265b0' />
                            </View>
                            <View style={{width:'80%'}}>
                                <Text  style={{fontSize:16,color:'#3265b0'}}>My Payments</Text>
                            </View> 
                        </View>

                        <Divider style={{marginTop:5,marginBottom:5}} />

                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',padding:20}}>
                            <View style={{width:'20%',alignItems:'flex-start'}}>
                                <FIcon name="magic" size={25} color='#3265b0' />
                            </View>
                            <TouchableOpacity style={{width:'80%'}} onPress={()=>{
     AsyncStorage.removeItem("@uid").then(success=>{
         console.log("deleted")
         firebase.auth().signOut()
         this.props.navigation.navigate("SignInAndSignUp")
     }).catch(err=>{
         console.log(err)
     })
                            }}>
                                
                                <Text  style={{fontSize:16,color:'#3265b0'}}>Log Out</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                  </View>
              </ScrollView>
          );
    }
};



const styles = StyleSheet.create({
  container:{
      flex:1,
    //   width:wp('100%'),
    //   alignItems:'center',
      backgroundColor:'#f5f5f5'
  },
  header:{
      width:'90%',
      height:hp('35%'),
      backgroundColor:'#3265b0',
      alignItems:'center',
      borderRadius:20,
      padding:10,
      marginTop:10
  },
  body:{
    width:'90%',
    backgroundColor:'white',
    borderRadius:20,
    padding:0,
    marginTop:10,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 6,}, 
    shadowOpacity: 0.37,
    shadowRadius: 7.49, 
    elevation: 12,
    marginBottom:20
  }
})


export default Account;
