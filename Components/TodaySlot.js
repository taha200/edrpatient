import React,{Component} from 'react';
import {Button,Input,Text,Image,Icon,SearchBar,Card,Avatar,Badge,Rating,Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import img from '../Images/doc.jpg'
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'




class TodaySlot extends Component{
    state = {

      };

    render(){

        return (
              <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <Icon type="antdesign" name="arrowleft" color="white" onPress={()=>this.props.navigation.goBack(null)} />
                                <Text style={{color:'white',fontSize:18,marginLeft:10}}>Select Time Slot</Text>
                            </View>
                        </View>
                        <Card containerStyle={styles.infoCard}>
                            <View style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20}}>
                                <View style={{width:'30%'}}>
                                    <Avatar rounded size={60}
                                        source={{
                                            uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                                        }}
                                    />
                                </View>
                                <View style={{width:'70%'}}>
                                    <Text style={{fontSize:14,fontWeight:'bold'}}>Dr. Zan Chau</Text> 
                                    <Text style={{color:'gray',fontSize:12}}>Dermitologist</Text>
                                </View>
                            </View>
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View style={{alignItems:'center'}}>
                                <Text style={{fontSize:16}}>Today, 8 Dec</Text>
                            </View>
                            <View style={{marginTop:30,width:'100%',alignItems:'center'}}>
                                <Text style={{color:'gray',fontSize:12}} >No Slots Available for today</Text>

                                <TouchableOpacity onPressIn={()=>this.props.navigation.navigate('FindTimeSlot')}>
                                    <Button 
                                        title="Next Day Availability" 
                                        containerStyle={{marginTop:20}} 
                                        buttonStyle={{borderRadius:50,width:200,backgroundColor:'#3265b0'}} 
                                        onPressIn={()=>console.log('Helo')}
                                    />
                                </TouchableOpacity>
                                <Text style={{color:'gray',fontSize:10,marginTop:10}}>Or</Text>
                                <TouchableOpacity onPressIn={()=>this.props.navigation.navigate('FindTimeSlot')}>
                                    <Button
                                        title=">" 
                                        containerStyle={{marginTop:10}} 
                                        buttonStyle={{borderRadius:50,width:40,backgroundColor:'#3265b0'}} 
                                        
                                    />
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </View>

                    <View style={{position:'absolute',bottom:1,display:'flex',flexDirection:'row',width:wp('100%'),alignItems:'center'}}>
                        <Button 
                            title={<Text style={{color:'black',fontSize:16,color:'#3265b0'}}>Give Feedback</Text>} 
                            buttonStyle={{width:wp('65%'),backgroundColor:'white',borderRadius:50,borderWidth:1,borderColor:'gray',height:50}} 
                            containerStyle={{borderRadius:50}}
                        />
                        <Button 
                            title='Book' 
                            containerStyle={{position:'absolute',right:0,zIndex:1}} 
                            buttonStyle={{width:wp('50%'),borderRadius:50,height:50}} 
                            onPress={()=>console.log('Helo')}
                        />
                    </View>
                    
              </View>
          );
    }
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    header:{
        width:wp('100%'),
        height:hp('30%'),
        backgroundColor:'#3265b0',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        position:'relative',
        padding:30
    },
    infoCard:{
        zIndex:-1,
        position:'absolute',
        top:hp('10%'),
        left:wp('1%'),
        width:wp('90%'),
        borderRadius:25,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:0,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 6},
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        
    }
})


export default TodaySlot;
