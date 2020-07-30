import React,{Component} from 'react';
import {Button,Input,Text,Image,Card,Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';


const data = [
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
]
class UpCommingApp extends Component{
    render(){
        return (
              <View style={styles.container}>
                    <Text style={{fontSize:30,fontWeight:'bold',marginTop:30,alignSelf:'flex-start'}}>Your Appointments</Text>
                    <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}>
                            <View style={{width:'50%'}}>
                                <Button title={<Text style={{color:'#3265b0'}}>Upcomming</Text>}  
                                buttonStyle={{borderRadius:0,height:50,width:'100%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 6,}, shadowOpacity: 0.37,shadowRadius: 7.49, elevation: 12}} />
                            </View>
                            <View style={{width:'50%'}}>
                                <Button title={<Text style={{color:'gray'}}>Past</Text>}  
                                    buttonStyle={{backgroundColor:'lightgray',borderRadius:0,height:50,width:'100%'}} 
                                    onPress={()=>this.props.navigation.navigate('PastAppointment')}
                                />
                            </View>
                    </View>
                    <FlatList
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        style={{paddingLeft:20,paddingRight:30}}
                        horizontal={true}
                        renderItem={({ item }) => 
                            <Card containerStyle={{width:wp('70%'),padding:30,marginLeft:10,marginTop:30,borderRadius:10,marginRight:5,backgroundColor:'#3265b0',justifyContent:'center'}}>
                                <Text  style={{fontSize:12,color:'#eeeeee'}}>in 3 days</Text>
                                <Text  style={{fontSize:18,marginTop:5,fontWeight:'bold',color:'white'}}>Consultation with Eric Su</Text>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20,width:'100%'}}>
                                    <View style={{width:'20%',alignItems:'flex-start'}}>
                                        <Icon type="antdesign" name="calendar" size={14} color="white" />
                                    </View>
                                    <View style={{width:'80%'}}>
                                        <Text  style={{fontSize:14,color:'#eeeeee'}}>November 17</Text>
                                    </View> 
                                </View>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{width:'20%',alignItems:'flex-start'}}>
                                        <Icon type="antdesign" name="clockcircleo" size={14} color="white" />
                                    </View>
                                    <View style={{width:'80%'}}>
                                        <Text  style={{fontSize:14,color:'#eeeeee'}}>10:00 AM</Text>
                                    </View>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{width:'20%',alignItems:'flex-start'}}>
                                        <Icon type="entypo" name="location-pin" size={14} color="white" />
                                    </View>
                                    <View style={{width:'80%'}}>
                                        <Text  style={{fontSize:14,color:'#eeeeee'}}>Main Street 18</Text>
                                    </View>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{width:'20%',alignItems:'flex-start'}}>
                                        <Icon type="zocial" name="call" size={14} color="white" />
                                    </View>
                                    <View style={{width:'80%'}}>
                                        <Text  style={{fontSize:14,color:'#eeeeee'}}>+1111111</Text>
                                    </View>
                                </View>
                                <Button  
                                    title={<Text style={{color:'#3265b0'}}>RESCHEDULE</Text>} 
                                    buttonStyle={{borderRadius:0,height:50,width:'100%',backgroundColor:'white',marginTop:20}}
                                />
                            </Card>
                        
                    
                        }
                        keyExtractor={item => item.id}
                    />
              </View>
          );
    }
};



const styles = StyleSheet.create({
  container:{
      flex:1,
      width:wp('100%'),
      alignItems:'center',
      padding:20,
      backgroundColor:'#f5f5f5'
  }
})


export default UpCommingApp;
