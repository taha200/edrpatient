import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Button,Image } from 'react-native-elements';
import logo from '../Images/logo.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class BookAppointmentSplash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={logo} style={{ width: 250, height: 250 }} />
                    <Text style={{fontWeight:'bold',fontSize:20,marginTop:20}}>Book Appointment</Text>
                    <Text style={{color:'gray',marginTop:10}}>Book an appointment with a</Text>
                    <Text style={{color:'gray'}}>right doctor</Text>
                </View>
                <View style={styles.footer}>
                    <Button title="Next" type="outline" buttonStyle={{width:180,height:50,borderRadius:25,borderWidth:2}} onPress={()=>this.props.navigation.navigate('BookDoctorSplash')} />
                </View>
               

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('100%'),
        height:hp('80%'),
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('100%'),
        height:hp('20%')
    }
})
