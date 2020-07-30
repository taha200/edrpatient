import React,{Component} from 'react';
import {Button,Text,Image,Icon,SearchBar,Card,Avatar,Badge,Rating,Divider,Input } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Picker,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'


class BookDocForm extends Component{
    state = {
        value:''
      };


    render(){
        let data = [{
            value: 'Banana',
          }, {
            value: 'Mango',
          }, {
            value: 'Pear',
          }];

        return (
              <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <Icon type="antdesign" name="arrowleft" color="white" onPress={()=>this.props.navigation.goBack(null)} />
                                <Text style={{color:'white',fontSize:18,marginLeft:10}}>Select Time Slot</Text>
                            </View>
                        </View>
                    </View>
                    
                    <Card containerStyle={styles.infoCard}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <View style={{height:'100%'}}>
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
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                                    <View style={{width:'50%',borderRightWidth:1,borderRightColor:'lightgray',paddingRight:20}}>
                                        <Text style={{fontSize:12,color:'gray'}}>DATE & TIME</Text>
                                        <Text style={{fontSize:14,fontWeight:'bold'}}>Tomorrow, 9 Dec</Text>
                                        <Text style={{fontSize:14,fontWeight:'bold'}}>10:00 AM</Text>
                                    </View>
                                    <View style={{width:'50%',paddingLeft:20}}>
                                        <Text style={{fontSize:12,color:'gray'}}>Consultation Fee</Text>
                                        <Text style={{fontSize:14,fontWeight:'bold'}}>$600</Text>
                                    </View>
                                </View>
                                <Divider style={{marginTop:10,marginBottom:10}} />
                                <View style={{marginTop:10,marginBottom:50}}>
                                    <Input 
                                        placeholder="Name" 
                                        inputStyle={{fontSize:16,paddingLeft:10}} 
                                        inputContainerStyle={{borderWidth:1,borderColor:'lightgray',borderRadius:10,backgroundColor:'#f6f6f6',paddingTop:5,marginTop:5}} 
                                    />
                                    <Input 
                                        placeholder="Email" 
                                        inputStyle={{fontSize:16,paddingLeft:10}} 
                                        inputContainerStyle={{borderWidth:1,borderColor:'lightgray',borderRadius:10,backgroundColor:'#f6f6f6',paddingTop:5,marginTop:5}} 
                                    />
                                    <Input 
                                        placeholder="Number" 
                                        inputStyle={{fontSize:16,paddingLeft:10}} 
                                        inputContainerStyle={{borderWidth:1,borderColor:'lightgray',borderRadius:10,backgroundColor:'#f6f6f6',paddingTop:5,marginTop:5}} 
                                    />
                                    <View style={{width:'93%',alignSelf:'center',borderWidth:1,borderColor:'lightgray',borderRadius:10,backgroundColor:'#f6f6f6',marginTop:5,height:50}}>
                                        <Picker
                                            
                                            style={{ height: 50, width: '100%' }}
                                            containerStyle={{borderWidth:1,borderColor:'lightgray'}}
                                            placeholder="Select"
                                            
                                        >
                                            <Picker.Item label="Java" value="java" />
                                            <Picker.Item label="JavaScript" value="js" />
                                        </Picker>
                                    </View>
                                    <Input 
                                        placeholder="Number" 
                                        multiline={true}
                                        numberOfLines={5}
                                        inputStyle={{fontSize:16,paddingLeft:10,textAlignVertical:'top'}} 
                                        inputContainerStyle={{borderWidth:1,borderColor:'lightgray',borderRadius:10,backgroundColor:'#f6f6f6',paddingTop:5,marginTop:5}} 
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </Card>

                    <View style={{position:'absolute',bottom:1,display:'flex',flexDirection:'row',width:wp('100%'),alignItems:'center',zIndex:2}}>
                        <Button 
                            title={<Text style={{color:'black',fontSize:16,color:'#3265b0'}}>Give Feedback</Text>} 
                            buttonStyle={{width:wp('65%'),backgroundColor:'white',borderRadius:50,borderWidth:1,borderColor:'gray',height:50}} 
                            containerStyle={{borderRadius:50}}
                        />
                        <Button 
                            title='Book' 
                            containerStyle={{position:'absolute',right:0,zIndex:1}} 
                            buttonStyle={{width:wp('50%'),borderRadius:50,height:50}} 
                            onPress={()=>this.props.navigation.navigate('BookingComplete')}
                        />
                           
                    </View>
                    
              </View>
          );
    }
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        alignItems:'center'
    },
    header:{
        width:wp('100%'),
        height:hp('30%'),
        backgroundColor:'#3265b0',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        padding:30,
    },
    infoCard:{
        marginTop:'-25%',
        width:wp('90%'),
        height:hp('70%'),
        borderRadius:25,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:0,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 6},
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        overflow:'hidden'
        
    },
})


export default BookDocForm;
