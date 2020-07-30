import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Button,Image } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import img from '../Images/logo.png'

export default class SplashScreen extends Component {


    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('SearchDocSplash');
        },5000)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={img} style={{ width: 250, height: 250 }} />
                </View>
                <View style={styles.footer}>
                    <Text style={{fontWeight:'bold'}}>Design by: Thinksolutionz</Text>
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
        height:hp('90%'),
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('100%'),
        height:hp('10%')
    }
})
