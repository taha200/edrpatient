import React,{Component} from 'react';
import {Button,Input,Text,Image,Avatar,Card,Rating,Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native'
import img from '../Images/doc.jpg'

const data = [
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {name:"Dr. Sms",Des:'sahdflsdfs sldfjsaldf sdlkfjasd',rating:'2.5',avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
]
class Home extends Component{
    render(){
        
        return (
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{color:'white',fontSize:18}}>Med+</Text>
                        <View style={styles.iconsContainer}>
                            <View style={styles.iconBox} >
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchDoctors')}>
                                    <Icon type="entypo"  name="user" raised size={30}  />
                                </TouchableOpacity>
                                <Text style={{fontSize:12,fontWeight:'bold'}}>Doctor</Text>
                                <Text style={{fontSize:10,color:'gray',textAlign:'center',marginTop:5}}>Search Doctor Arround You</Text>
                            </View>
                            <View style={styles.iconBox}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('UpCommingApp')}>
                                    <Icon  type="antdesign" name="calendar" raised size={30} />
                                </TouchableOpacity>
                                <Text style={{fontSize:12,fontWeight:'bold'}}>My Appointment</Text>
                                <Text style={{fontSize:10,color:'gray',textAlign:'center',marginTop:5}}>Your upcomming and previous Appointment</Text>
                            </View>
                            <View style={styles.iconBox}>
                                <Icon  type="entypo" name="users" raised size={30} />
                                <Text style={{fontSize:12,fontWeight:'bold'}}>My Doctor</Text>
                                <Text style={{fontSize:10,color:'gray',textAlign:'center',marginTop:5}}>Book Your Doctor</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.findDoc}>
                            <ImageBackground source={img} style={styles.image} imageStyle={{borderRadius:10}}>
                                <View style={{width:'35%',alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:16,textAlign:'center'}}>How to use Find-A-Doc overview</Text>
                                    <Text style={{fontSize:10,color:'gray',textAlign:'center',marginTop:5}}>
                                        Learn how to navigate the CDPHP provider search tool
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.docNearBy}>
                            <View style={{width:"100%",display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                                <Text style={{color:'gray'}}>Doctors nearby you</Text>
                                <Text style={{color:'blue'}}>View all</Text>
                            </View>
                            <FlatList
                                data={data}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => 
                                    <Card containerStyle={{width:wp('40%'),marginLeft:0,marginTop:50,position:'relative',borderRadius:10,marginRight:5}}>
                                            <Avatar rounded size={60} containerStyle={{position:'absolute',top:-40,left:'22%'}} source={{uri:item.avatar}}/>
                                            <View style={{marginTop:30,justifyContent:'space-between'}}>
                                                <View>
                                                    <Text numberOfLines={1} style={{fontSize:12,fontWeight:'bold'}}>{item.name} </Text>
                                                    <Text numberOfLines={2} style={{fontSize:12,marginTop:5,color:'gray'}}>{item.Des} </Text>
                                                </View>
                                                <View style={{marginTop:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                                    <Rating ratingCount={1} imageSize={20} readonly count={5} onFinishRating={this.ratingCompleted}style={{ paddingVertical: 10 }}/>
                                                    <Text style={{marginLeft:10}}>{item.rating}</Text>
                                                </View>
                                            </View>
                                    </Card>
                                
                            
                                }
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </ScrollView>
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
      height:hp('20%'),
      backgroundColor:'#3265b0',
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      position:'relative',
      padding:30
  },
  iconsContainer:{
      position:'absolute',
      top:hp('13%'),
      left:wp('0%'),
      display:'flex',
      flexDirection:'row',
      alignItems:'flex-start',
      width:wp('100%')
  },
  iconBox:{
      width:wp('33%'),
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  body:{
      marginTop:hp('20%'),
      width:wp('100%'),
      alignItems:'center',
      marginBottom:20
  },
  findDoc:{
      width:wp('90%'),
      borderWidth:1,
      borderColor:'lightgray',
      borderRadius:10,
      height:hp('25%'),
  },
  image:{
      width:'100%',
      height:'100%',
      resizeMode:'cover',
      justifyContent:'center',
  },
  docNearBy:{
    width:wp('90%'),
    marginTop:50,
  },
  docDetailBox:{
      marginTop:40,
      width:150,
      height:150,
      position:'relative',
      backgroundColor:'white',
      borderRadius:10
  }
})


export default Home;
