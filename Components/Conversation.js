import React, {Component} from 'react';
import {Platform, Text, View,FlatList,TouchableOpacity,StatusBar} from 'react-native';
import {Avatar,Header,Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import baseUrl from '../constants/baseUrl'

 export default class Conversation extends Component{
   constructor(props){
      super(props)
      this.state={
         chats:[],
         refreshing:false
      }
   }
   getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@uid')
      if(value !== null) {
        // value previously stored
        let data = {
            firebaseUID:value
         }
         fetch(baseUrl+'/getChats',{method:"PUT",body:JSON.stringify(data),headers: { "Content-Type": "application/json" }}).then(res=>res.json()).then(response=>{
            this.setState({
               chats:response.data,
               refreshing:false
            })
   
         }).catch(err=>console.log(err))
      }
      else{

      }
    } catch(e) {
        alert(e)
    }
  }
    componentDidMount(){
     this.getData();
    }
    // handleRefresh(){
    //    this.setState({refreshing:true})
    //   if(this.props.firebaseUID){
    //      let data = {
    //         firebaseUID:this.props.firebaseUID
    //      }
    //      fetch(url+'/api/getChats',{method:"PUT",body:JSON.stringify(data),headers: { "Content-Type": "application/json" }}).then(res=>res.json()).then(response=>{
    //         this.setState({
    //            chats:response.data,
    //            refreshing:false
    //         })
   
    //      }).catch(err=>console.log(err))
    //      }
    // }
    
     render(){
         return(
            <View style={{flex:1}}>
            <StatusBar barStyle='light-content'/>
            <View style={{
                             width:wp('100%'),
                             height:hp('20%'),
                             backgroundColor:'#3265b0',
                             borderBottomLeftRadius:20,
                             borderBottomRightRadius:20,
                             justifyContent:'center',
                             padding:30
                     }}>
                <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Icon type="antdesign" name="close" color="white" onPress={()=>this.props.navigation.goBack(null)} />
                          <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                            
                              <View style={{marginLeft:30}}>
                                  <Text style={{fontSize:20,color:'white'}}>Conversations</Text>
                              </View>
                   
                          </View>
                    </View>
                </View>
            </View>

                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                    {this.state.chats.length>0 && <FlatList
                     data={this.state.chats}
                     renderItem={({item,index})=>{
                 
                           return      <View style={{width:'100%',flexDirection:'row'}}>
                    <Avatar containerStyle={{marginLeft:5,marginTop:15}}
                   size="medium"
                   rounded
                   source={{
                      uri:item.DocProfilePic,
                     }}
                     />  
                 <View style={{marginLeft:15,marginTop:20,borderBottomColor:'#4d2600',borderBottomWidth:2,paddingBottom:15,flexBasis:'70%'}}>
                 <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Chat',{
                        chatData:item
                    })
                 }}>
                    
                    <Text style={{fontSize:20,fontWeight:"bold"}}>{item.Docname}</Text>
                    <Text>{item.messages.length>0?item.messages[item.messages.length-1].text:'No message'}</Text>
                    </TouchableOpacity>
                 </View>
                     </View>
                        
                     }}
                     keyExtractor={item => item._id}
                    />}
                     </View>
                         </View>
         )
     }
 }

 