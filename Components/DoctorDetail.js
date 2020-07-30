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


const data = [
    {image:img},
    {image:img},
    {image:img},
    {image:img},
    {image:img},
    {image:img},
    {image:img},
    {image:img},
    {image:img},
    {image:img},
    {image:img},
]

class DoctorsList extends Component{
    state = {
        search: '',
        list : [
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
            {name: 'Ophthalmologist'},
          ],
        seeAll:false
      };

    updateSearch = search => {
    this.setState({ search });
    };
    render(){

        return (
              <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                            <View style={{width:'60%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Icon type="antdesign" name="arrowleft" color="white" onPress={()=>this.props.navigation.goBack(null)} />
                            </View>
                        </View>
                    </View>

                    <Card containerStyle={styles.infoCard}>
                        <View style={{position:'absolute',top:-40,left:'35%',height:80,width:80,backgroundColor:'white',borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                            <Avatar
                                rounded
                                size={73}
                                source={{
                                    uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                            />
                        </View>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:10}}>
                            <Rating ratingCount={1} startingValue={5} readonly minValue={5} imageSize={20} />
                            <Text style={{marginLeft:5}}>4.5</Text>
                        </View>
                        <View style={{alignItems:'center',marginTop:20}}>
                            <Text style={{fontSize:14,fontWeight:'bold'}}>Dr. Jitendra Raut</Text>
                            <Text style={{fontSize:14,color:'gray'}}>B.Sc, MBBS, DDVL, MD - Dermitologist</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:25}}>
                            <Text style={{fontSize:10,color:'gray'}}>16 yrs Experience </Text>
                            <Text style={{fontSize:10,color:'gray'}}>89% (495 votes)</Text>
                        </View>
                        <View style={{marginTop:20,width:'100%'}}>
                            <FlatList
                                data={data}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View style={{}}>
                                        <Image source={item.image} style={{height:50,width:50,marginRight:10}} resizeMode="cover" borderRadius={10} />
                                    </View>
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </Card>

                    <ScrollView style={{marginTop:hp('2%'),marginBottom:60}}>
                        <Card containerStyle={{borderRadius:25}}>
                            <Button 
                                type="outline" 
                                title={<Text style={{color:'#3265b0'}}>Book</Text>} 
                                containerStyle={{alignSelf:'flex-end',width:120}} 
                                buttonStyle={{borderRadius:50,borderColor:'#3265b0'}} 
                                onPress={()=>this.props.navigation.navigate('TodaySlot')}
                            />
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text style={{fontSize:12,color:'red'}}>Closed Today </Text>
                                <Text style={{fontSize:12,color:'black'}}>8:30AM - 8:00PM</Text>
                                <Text style={{fontSize:12,color:'blue'}}>All Timming</Text>
                            </View>
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
                                <Icon type="entypo" name="location-pin" size={16} color="gray" />
                                <Text style={{marginLeft:5,color:'gray',fontSize:12}}>92/6, 3rd floor, Oulter Ring Road, Changra Layout</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                <MapView style={{height:150,width:wp('80%'),marginTop:10,alignSelf:'center',borderRadius:10}}
                        
                                    initialRegion={{
                                        latitude: 24.8607,
                                        longitude: 67.0011,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                    
                                >
                                </MapView>
                            </View>
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View>
                                <Text style={{fontSize:14,color:'gray'}}>FEEDBACK</Text>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:12}}>Your Very Good</Text>   
                                </View>
                            </View>
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View>
                                <Text style={{fontSize:14,color:'gray'}}>SERVICES</Text>
                                <View style={{marginTop:10}}>
                                    <FlatList
                                        data={data}
                                        initialNumToRender={3}
                                        renderItem={({ item, index }) => (
                                            
                                            this.state.seeAll === true ? <Text style={{fontSize:12}}>Ophthalmologist</Text>  
                                            :
                                            index <=2 &&  <Text style={{fontSize:12}}>Ophthalmologist</Text>  
                                        )}
                                        keyExtractor={item => item.id}
                                    />
                                    <Text style={{fontSize:14,marginTop:5,color:'blue'}} onPress={()=>this.setState({seeAll:!this.state.seeAll})}>ALL SERVICES</Text>   
                                </View>
                            </View>
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View>
                                <Text style={{fontSize:14,color:'gray'}}>SPECIALIZATION</Text>
                                <View style={{marginTop:10}}>
                                    <FlatList
                                        data={data}
                                        initialNumToRender={3}
                                        renderItem={({ item, index }) => (
                                            <Text style={{fontSize:12}}>Dermitologist</Text>  
                                        )}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <Badge status="success" badgeStyle={{width:15,height:15,borderRadius:50}} />
                                    <Text style={{marginLeft:5,color:'gray',fontSize:14}}>VERIFICATION DONE FOR</Text>
                                </View>
                                <Text style={{fontSize:12}}>- Medical License</Text> 
                            </View>
                            <Divider style={{marginTop:10,marginBottom:10}} />
                            <View>
                                <Text style={{color:'gray',fontSize:14}}>ALSO PRACTICES AT</Text>
                                <FlatList
                                    data={data}
                                    renderItem={({ item, index }) => (
                                        <>
                                            <View style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20}}>
                                                <View style={{width:'25%'}}>
                                                    <Avatar
                                                        rounded
                                                        size={50}
                                                        source={{
                                                            uri:
                                                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                                        }}
                                                    />
                                                </View>
                                                <View style={{width:'75%'}}>
                                                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}> 
                                                        <Text style={{fontSize:14,fontWeight:'bold'}}>Dr. Zan Chau</Text> 
                                                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                                            <Rating ratingCount={1} startingValue={5} readonly minValue={5} imageSize={20} />
                                                            <Text style={{marginLeft:5}}>4.5</Text>
                                                        </View>
                                                    </View>
                                                    <Text style={{color:'gray',fontSize:12}}>Dermitologist</Text>
                                                    <Text style={{fontSize:12,fontWeight:'bold'}}>$30</Text> 
                                                </View>
                                            </View>
                                            <Divider style={{marginTop:10,marginBottom:10}} />
                                        </>
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </Card>
                    </ScrollView>

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
                            onPress={()=>this.props.navigation.navigate('TodaySlot')}
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
        padding:30
    },
    infoCard:{
        width:wp('90%'),
        marginTop:'-30%',
        borderRadius:25,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:0,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 6},
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12
    }
})





export default DoctorsList;
