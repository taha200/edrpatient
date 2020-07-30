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


class FindTimeSlot extends Component{
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
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Button 
                                    title={<Text style={{color:'black',fontSize:16,color:'#3265b0',fontWeight:'bold'}}>{'<'}</Text>} 
                                    buttonStyle={{width:25,height:25,backgroundColor:'white',borderRadius:50,shadowColor: "#000",shadowOffset: {width: 0,height: 6,}, shadowOpacity: 0.37,shadowRadius: 7.49, elevation: 12}} 
                                    containerStyle={{borderRadius:50}}
                                />
                                <Text style={{fontSize:16}}>Sunday, 9 Dec</Text>
                                <Button 
                                    title={<Text style={{color:'black',fontSize:16,color:'#3265b0',fontWeight:'bold'}}>{'>'}</Text>} 
                                    buttonStyle={{width:25,height:25,backgroundColor:'white',borderRadius:50,shadowColor: "#000",shadowOffset: {width: 0,height: 6,}, shadowOpacity: 0.37,shadowRadius: 7.49, elevation: 12}} 
                                    containerStyle={{borderRadius:50}}
                                />
                            </View>
                            <View style={{marginTop:10,width:'100%'}}>
                                <View style={styles.slots}>
                                        <View style={{padding:5,paddingLeft:15,paddingRight:15,borderRadius:50,backgroundColor:'#3265b0',position:'absolute',top:-12,left:'48%'}}>
                                            <Text style={{color:'white',fontSize:10}}>Morning</Text>
                                        </View>
                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
                                                <TouchableOpacity onPressIn={()=>this.props.navigation.navigate('BookDocForm')}>
                                                    <Text style={{fontSize:12}}>10:00</Text>
                                                </TouchableOpacity>
                                                <Text style={{fontSize:12}}>11:00</Text>
                                                <Text style={{fontSize:12}}>12:00</Text>
                                        </View>
                                </View>  
                                <View style={styles.slots}>
                                        <View style={{padding:5,paddingLeft:15,paddingRight:15,borderRadius:50,backgroundColor:'#3265b0',position:'absolute',top:-12,left:'46%'}}>
                                            <Text style={{color:'white',fontSize:10}}>Afternoon</Text>
                                        </View>
                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
                                                <Text style={{fontSize:12}}>1:00</Text>
                                                <Text style={{fontSize:12}}>2:00</Text>
                                                <Text style={{fontSize:12}}>3:00</Text>
                                                <Text style={{fontSize:12}}>4:00</Text>
                                        </View>
                                </View>  
                                <View style={styles.slots}>
                                        <View style={{padding:5,paddingLeft:15,paddingRight:15,borderRadius:50,backgroundColor:'#3265b0',position:'absolute',top:-12,left:'40%'}}>
                                            <Text style={{color:'white',fontSize:10}}>Evening & Night</Text>
                                        </View>
                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
                                                <Text style={{fontSize:12}}>5:00</Text>
                                                <Text style={{fontSize:12}}>6:00</Text>
                                                <Text style={{fontSize:12}}>7:00</Text>
                                                <Text style={{fontSize:12}}>8:00</Text>
                                                <Text style={{fontSize:12}}>9:00</Text>
                                        </View>
                                </View>  
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
                            buttonStyle={{width:wp('50%'),borderRadius:50,height:50}} />
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
        position:'absolute',
        top:hp('8%'),
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
        elevation: 12
    },
    slots:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:25,
        borderRadius:10,
        borderWidth:1,
        borderColor:'lightgray',
        backgroundColor:'#eeeeee',
        position:'relative',
        marginTop:30
    }
})


export default FindTimeSlot;
