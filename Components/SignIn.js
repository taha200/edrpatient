import React,{Component} from 'react';
import {Button,Input,Text,Image} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import img from '../Images/logo.png'
import firebase from 'react-native-firebase'
import {
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class SignIn extends Component{
  state={
    email:"",
    password:""
  }
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@uid',value)
      this.props.navigation.navigate("Home")

    } catch (e) {
      // saving error
    }
  }
  Login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((success)=>{
      this.storeData(success.user.uid)
    }).catch(err=>alert(err))
  }
    render(){
        return (
              <View style={styles.container}>
                  <View style={styles.headDesign}></View>
                  <View style={styles.body}>
                      <Image source={img} style={{ width: 130, height: 130 }} />
                      <View style={{marginTop:30,width:wp('70%'),display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:25,marginBottom:10}}>Sign In</Text>
                        <Input
                          placeholder='email'
                          inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:30}}
                          inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                          onChangeText={(text)=>this.setState({email:text})}
                        />
                        <Input
                          placeholder='password'
                          secureTextEntry={true}
                          inputContainerStyle={{borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,height:30,marginTop:10}}
                          inputStyle={{fontSize:14,color:'gray',textAlign:'center',textAlignVertical:'bottom'}}
                          onChangeText={(text)=>this.setState({password:text})}

                        />
                        <Button 
                          title="Sign In" 
                          buttonStyle={{width:150,height:50,borderRadius:25,borderWidth:2,marginTop:20,backgroundColor:'#3265b0',borderColor:'#3265b0'}}  
                          onPress={this.Login} 
                        />
                        <Text style={{color:'lightgray'}}>or</Text>
                        <Button 
                          title={<Text style={{color:'#3265b0'}} >Create Account</Text>} 
                          type="outline"
                          
                          buttonStyle={{width:250,borderRadius:25,height:35,marginTop:10,shadowColor:'lightgray',shadowRadius:10,shadowOpacity:1,borderColor:'#3265b0',color:'#3265b0'}}  
                          onPress={()=>this.props.navigation.navigate('SignUp')} 
                          
                      /> 
                      </View>
                  </View>
                  <View style={styles.footDesign}></View>
              </View>
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


export default SignIn;
