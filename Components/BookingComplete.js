import React,{Component} from 'react';
import {Button,Input,Text,Image,Card} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
} from 'react-native';

class BookingComplete extends Component{
    render(){
        return (
              <View style={styles.container}>
                  <View style={styles.headDesign}></View>
                  <View style={styles.body}>
                      <Card containerStyle={styles.card}>
                            <View style={styles.shape}></View>
                            <Text style={{fontSize:25,fontWeight:'bold'}}>Thanks For Booking!</Text>
                            <Text style={{fontSize:16,color:'gray',textAlign:'center',marginTop:10}}>You Booked an Appointment with Eric Su November, 2018 at 10:00 Am</Text>
                            <Button title="Go To My Appointments" buttonStyle={{marginTop:50}}
                                onPress={()=>this.props.navigation.navigate('UpCommingApp')}
                            />
                      </Card>
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
      alignItems:'center',
  },
  card:{
    width:wp('80%'),
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    paddingLeft:25,
    paddingRight:25,
    paddingTop:0,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 6},
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  shape:{
      width:100,
      height:100,
      borderRadius:10,
      backgroundColor:'#3265b0',
      alignSelf:'center',
      marginBottom:30,
      transform:[{rotate:'45deg'}]
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


export default BookingComplete;
