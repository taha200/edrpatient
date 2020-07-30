import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Button,Image } from 'react-native-elements';
import logo from '../Images/logo.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headDesign}></View>
                <View style={styles.body}>
                    <Button 
                        title="Sign In" 
                        buttonStyle={{width:180,height:50,borderRadius:25,borderWidth:2,backgroundColor:'#3265b0',borderColor:'#3265b0'}}  
                        onPress={()=>this.props.navigation.navigate('SignIn')} 
                    />
                    <Button 
                        title={<Text style={{color:'#3265b0'}}>Sign Up</Text>} 
                        type="outline" 
                        buttonStyle={{width:180,height:50,borderRadius:25,borderWidth:2,marginTop:20,borderColor:'#3265b0'}}  
                        onPress={()=>this.props.navigation.navigate('SignUp')} 
                    />
                </View>
                <View style={styles.footDesign}></View>
            </View>
        )
    }
}

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
