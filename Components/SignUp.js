import React,{Component} from 'react';
import {Button,Text,Input,Image} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown';
import AsyncStorage from '@react-native-community/async-storage';
import baseUrl from '../constants/baseUrl'
import img from '../Images/logo.png'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import firebase from 'react-native-firebase';
class SignUp extends Component{
  
  state={
    form:1,
    name:"",
    email:"",
    city:"",
    password:"",
    confirmPass:""
  }

  handleNext=()=>{
    this.setState({form:2})
  }
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@uid',value)
      this.props.navigation.navigate("Home")

    } catch (e) {
      // saving error
    }
  }
  SignUPvaluesToDB=(fbID)=>{
    var obj ={
      firebaseUID:fbID,
name:this.state.name,
email:this.state.email,

city:this.state.city,

password:this.state.password
    }
    fetch(baseUrl+`/patientSignUp`,{
      method:"POST",
      headers:{
    'Content-Type':'application/json'
      },
      body:JSON.stringify(obj)
    }).then(res=>res.json()).then(success=>{
      console.log(success)
      this.storeData(fbID)

    }).catch(err=>console.log(err))
  }
   SignUP=()=>{
     if(this.state.password===this.state.confirmPass){
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((success)=>this.SignUPvaluesToDB(success.user.uid)).catch(err=>alert(err))

     }
     else{
       alert("Your password doesn't match")
     }
   }
    render(){
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];

        return (
            
          <ScrollView style={styles.container}>
              <View style={styles.headDesign}></View>
              <View style={styles.body}>
                  <Image source={img} style={{ width: 130, height: 130 }} />
                  <View style={{marginTop:30,width:wp('70%'),display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,marginBottom:10}}>Sign Up</Text>
                      {
                        this.state.form === 1 ?
                          <>
                              <Input
                                placeholder='Name'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(text)=>this.setState({name:text})}
                              />
                              <Input
                                placeholder='Email'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(text)=>this.setState({email:text})}

                              />
        <Input
                                placeholder='City'
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(text)=>this.setState({city:text})}

                              />
                              {/* <Dropdown
                                    label=''
                                    dropdownOffset={{ 'top': 0, 'left':0  }}
                                    value="Select City"
                                    textColor="#c4c3c3"
                                    fontSize={14}
                                    data={data}
                                    containerStyle={{width:'90%'}}
                                    inputContainerStyle={{ borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10,paddingLeft:10}}
                                    
                                /> */}
                              <Text style={{color:'lightgray'}}>or</Text>
                              <Button 
                                title={<Text style={{color:'red',fontSize:25,fontWeight:'bold'}}>M</Text>}
                                type="outline"
                                buttonStyle={{width:250,borderRadius:25,height:40,marginTop:10,borderWidth:1,borderColor:'lightgray',height:30}}  
                                />
                              <Button 
                                title={<Text style={{color:'#3265b0'}}>Next</Text>} 
                                type="outline"
                                buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:20,borderColor:'#3265b0'}}  
                                onPress={this.handleNext} 
                              />
                          </>

                          :

                          <>
                              
                              <Input
                                placeholder='Password'
                                secureTextEntry={true}
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(text)=>this.setState({password:text})}

                              />
                              <Input
                                placeholder='Confirm Password'
                                secureTextEntry={true}
                                inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:15,height:30,marginTop:10}}
                                inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                                onChangeText={(text)=>this.setState({confirmPass:text})}

                              />
                              <Button 
                                title={<Text style={{color:'#3265b0'}}>Sign Up</Text>} 
                                type="outline"
                                buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:20,borderColor:'#3265b0'}}  
                                onPress={this.SignUP} 
                              />
                          </>

                      }
                  </View>
              </View>
              <View style={styles.footDesign}></View>
          </ScrollView>
          );
    }
};


const styles = StyleSheet.create({
  container:{
      flex:1
  },
  headDesign:{
      width:wp('30%'),
      height:hp('15%'),
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 100,
      borderTopWidth: 100,
      borderRightColor: 'transparent',
      borderTopColor: '#3265b0'
  },
  body:{
      width:wp('100%'),
      height:hp('70%'),
      justifyContent:'center',
      alignItems:'center'
  },
  footDesign:{
      width:wp('100%'),
      height:hp('15%'),
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      //borderLeftWidth:100,
      borderBottomWidth:100,
      borderRightWidth: 100,
      // borderTopWidth: 100,
      borderRightColor: 'transparent',
     // borderRightColor: 'transparent',
      borderBottomColor: '#3265b0'
      
  }
})

export default SignUp;
