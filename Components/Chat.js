import React,{Component,useState} from 'react';
import {Button,Input,Text,Image, Icon, Avatar, Badge, Overlay, Slider} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Buffer } from 'buffer';
import Sound from 'react-native-sound';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  ActivityIndicator
} from 'react-native';
import AudioRecord from 'react-native-audio-record';
import firebase from 'react-native-firebase'
import SocketIOClient from 'socket.io-client'
import baseUrl from '../constants/baseUrl'
const socket = SocketIOClient(baseUrl, {
  transports: ['websocket'] // you need to explicitly tell it to use websockets
});
 

class Chat extends Component{

    sound = null;
    constructor(props){
      super(props);
      this.state={
        overlay:false,
        imageUri:'',
        pause:false,
        recording: false,
        isPlay:false,
        audioFile:'',
        input:'',
        time:0,
        progress: 0,
        chatData:this.props.navigation.getParam('chatData'),
        isLoad:false,
        ////Chat Messages
        massages:[
      ]
}
socket.on('Sent',this.onReceiveMessage)

    }
   

    onReceiveMessage=(response)=>{
    
      let msg = JSON.parse(response)
      var newArray=this.state.massages
        newArray.push(msg)
        this.setState({
          massages:newArr
        })
   }
    ////Record Audio
    start = () => {

          const options = {
            sampleRate: 16000,
            channels: 1,
            bitsPerSample: 16,
            wavFile: `file${Math.floor((Math.random()*100 +1))}.wav`,
          };
  
          AudioRecord.init(options);
  
          AudioRecord.on('data', data => {
            const chunk = Buffer.from(data, 'base64');
            //console.log('chunk size', chunk.byteLength);
            // do something with audio chunk
          });
  
          this.setState({ recording: true});
          AudioRecord.start();
    };
      
    ////Stop Audio
    stop = async () => {

          if (!this.state.recording) return;

          let audioFile = await AudioRecord.stop();
          var newArr = this.state.massages;
          var obje={
            _id:this.messageIdGenerator(),   
            text: '',
            image:'',
            createdAt: new Date(),
            senderID:this.state.chatData.firebaseUID,
            audio:{
              file:audioFile,
              isPlay:false
            },
            join:'',
       }
       newArr.push(obje)
       this.setState({recording:false,massages:newArr})
          let storage = firebase.storage()
          let storageRef = storage.ref(`artisan/123456/audio`+Date.now())
          let task = storageRef.putFile(audioFile)
          task.on('state_changed', function (snapshot) {
               
          }, (error)=> {
            alert(error.message)
          }, () => {
            storageRef.getDownloadURL().then((downloadURL) => {
           
              var obj={
                chatId:this.state.chatData._id,  

                  text: '',
                  image:'',
                  join:'',
                  senderID:this.state.chatData.firebaseUID,
                  audio:{
                    file:downloadURL,
                    isPlay:false
                  },
             }
             socket.emit('input',JSON.stringify(obj))

  

            })
          })
      
        



    };

    ////custom Id Generator
    messageIdGenerator() {
          // generates uuid.
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
              let r = (Math.random() * 16) | 0,
                  v = c == "x" ? r : (r & 0x3) | 0x8;
              return v.toString(16);
          });
    }


    /////Animate sound Slider
    animate() {
          let progress = 0;
          this.setState({ progress });
          this.timeout = setInterval(() => {
                this.sound.getCurrentTime((seconds, isPlaying) => {
                    if(seconds !== progress)
                    {
                      this.setState({progress:seconds});
                    }
                })
          }, 100);
    }


    ///Play audio
    Play=(props)=>{
      this.setState({
        isLoad:true
      })
          this.sound = new Sound(props.audio.file, "", error => {
                                                              
              if (error) {
                  console.log("failed to load the sound", error);
              }


              

              let dura = this.sound.getDuration();
              this.setState({time:dura})


              this.animate()



              var newArr = this.state.massages.map(message=>{
                  if(message._id === props._id)
                  {
                    this.setState({
                      isLoad:false
                    })
                      message.audio.isPlay = true
                      return message
                  }
                  return message
              })
              this.setState({ massages : newArr});

              this.sound.play(success => {
                        
                  var Arr = this.state.massages.map(message=>{
                      if(message._id === props._id)
                      {
                          message.audio.isPlay = false
                          return message
                      }
                      return message
                  })

                  this.setState({ massages : Arr});
              });
        });

    }
    componentDidMount(){
      this.setState({
        massages:this.state.chatData.messages
      })
      try {
        const granted =PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
          granted['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.CAMERA'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('You can use the cameras & mic');
        } else {
          console.log('Permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }

   
    ////Stop Sound
    Pause=(props)=>{
          var newArr = this.state.massages.map(message=>{
            if(message._id === props._id)
              {
                  message.audio.isPlay = false
                  return message
              }
              return message
          })

          this.setState({ massages : newArr});

          this.sound.pause();
    }


    ////Sending Text Message
    onSendTextMessage=()=>{

        var newArr = this.state.massages;

        var obj={
                      
          text:this.state.input,
          image:'',
          createdAt: new Date(),
          senderID:this.state.chatData.firebaseUID,
          audio:{},
          join:'',
     }
     var obje={
      chatId:this.state.chatData._id,  
 
      text: this.state.input,
      image:'',
      join:'',
      senderID:this.state.chatData.firebaseUID,
      audio:{},
 }
        newArr.push(obj);
        socket.emit('input',JSON.stringify(obje))

        this.setState({ messages:newArr, input:''});
    }

    componentDidUnmount(){
        this.sound.stop()
    }


    handleImagePicker=()=>{
        const options = {
          title: 'Select Avatar',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

      
        ImagePicker.launchImageLibrary(options, (response) => {

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } 
          else
          {
      
            var obje={
              _id:this.messageIdGenerator(),       
              text: '',
              image:response.uri,
              createdAt: new Date(),
              senderID:this.state.chatData.firebaseUID,
              audio:{},
              join:'',
         }

            var newArr=this.state.massages

            newArr.push(obje)
            this.setState({
              massages:newArr
            })
            let storage = firebase.storage()
            let storageRef = storage.ref(`artisan/123456/images`+Date.now())
            var file=response.path.toString()

            let task = storageRef.putFile(file)
            task.on('state_changed', function (snapshot) {
                 
            }, (error)=> {
              alert(error.message)
            }, () => {
              storageRef.getDownloadURL().then((downloadURL) => {
                 var obj={
                  chatId:this.state.chatData._id,  
                  text: '',
                  image:downloadURL,
                  join:'',
                  senderID:this.state.chatData.firebaseUID,
                  audio:{},
 }
 socket.emit('input',JSON.stringify(obj))

    
  
              })
            })

                ////Image message
               
            

              }
        });
        
    }
    JoinCall=(id)=>{
     this.props.navigation.navigate("VideoCall",{
       channel:id
     })
    }
  //  DoVoice=()=>{
  //     var newArr = this.state.massages;

  //     var obj={
                    
  //       text:'',
  //       image:'',
  //       createdAt: new Date(),
  //       senderID:2,
  //       audio:{},
  //       join:'wowowowo',
  //       voice:true
  //  }

  //     newArr.push(obj);

  //     this.setState({ messages:newArr});
  
  //   }
  //   DoVideo=()=>{
  //     var newArr = this.state.massages;

  //     var obj={
                    
  //       text:'',
  //       image:'',
  //       createdAt: new Date(),
  //       senderID:2,
  //       audio:{},
  //       join:'wowowowo',
  //       voice:false
  //  }

  //     newArr.push(obj);

  //     this.setState({ messages:newArr});
  //      this.props.navigation.navigate("VideoCall")
  //   }

    handlePriviewImage=(id)=>{
      var img =  this.state.massages.filter(msg=>{
          return msg._id === id
        })

      this.setState({imageUri:img[0].image,overlay:!this.state.overlay})
    }


    render(){
      return(
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Icon type="antdesign" name="close" color="white" onPress={()=>this.props.navigation.goBack(null)} />
                          <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                              <View style={{width:'25%',alignItems:'center'}}>
                                  <View style={{position:'relative'}}>
                                    <Avatar rounded size={50} source={{uri:'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}/>
                                    <Badge status="success" containerStyle={{ position: 'absolute', bottom:0, right:0 }}badgeStyle={{width:15,height:15,borderRadius:50}}/>
                                  </View>
                              </View>
                              <View style={{View:'75%'}}>
      <Text style={{fontSize:20,color:'white'}}>{this.state.chatData.Docname}</Text>
                              </View>
                            
                          </View>
                    </View>
                </View>
            </View>

            <ScrollView style={{backgroundColor:'#eeeeee'}} >
              <View style={{padding:10,flex:1}}>
                {
                  this.state.massages.map((message,i)=>{
                      if(message.senderID!==this.state.chatData.firebaseUID)
                      {
                        return(
                          <View>
                            {
                                message.text !== '' ? 
                                  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',width:'100%',marginTop:5}}>
                                      <View style={{width:'15%'}}>
                                          <Avatar rounded size={50} source={{uri:'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}/>
                                      </View>
                                      <View style={{width:'83%'}}>
                                          <View style={{backgroundColor:'white',padding:10,paddingBottom:10,borderRadius:15,alignSelf:'flex-start'}}>
                                              <Text>{message.text}</Text>
                                              {/* <Text style={{marginTop:5,color:'gray',fontSize:12}}>{message.createdAt.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</Text> */}
                                          </View>
                                      </View>
                                  </View>
                                    : message.join !== '' ?<Button title="Join Call" buttonStyle={{backgroundColor:'green',marginTop:5
                                  }} onPress={()=>this.JoinCall(message.join)}></Button>

                                : message.image !== '' ?
                                  
                                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',width:'100%',marginTop:5}}>
                                        <View style={{width:'15%'}}>
                                            <Avatar rounded size={50} source={{uri:'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}/>
                                        </View>
                                        <View style={{width:'83%'}}>
                                            <View style={{backgroundColor:'white',padding:10,paddingBottom:10,borderRadius:15,alignSelf:'flex-start'}}>
                                                <TouchableOpacity style={{width:150, height:150 }} onPress={()=>this.handlePriviewImage(message._id)} >
                                                    <Image style= {{alignSelf:'center',width:'100%',height:'100%'}} resizeMode={'stretch'} source={{uri:message.image}}/>
                                                </TouchableOpacity>
                                        
                                                <Overlay isVisible={this.state.overlay} overlayStyle={{backgroundColor:'transparent',borderColor:'transparent',elevation: 0, shadowOpacity: 0}}  onBackdropPress={()=>this.setState({overlay:!this.state.overlay})}>
                                                    <Image style= {{alignSelf:'center',width:'100%',height:'100%'}} resizeMode={'contain'} source={{uri:this.state.imageUri}}/>
                                                </Overlay>
                                                {/* <Text style={{marginTop:5,color:'gray',fontSize:12}}>{message.createdAt.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</Text> */}
                                            </View>
                                        </View>
                                    </View>
                                :

                                  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',width:'100%',marginTop:5}}>
                                      <View style={{width:'15%'}}>
                                          <Avatar rounded size={50} source={{uri:'https:s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}/>
                                      </View>
                                      <View style={{width:'83%'}}>
                                          <View style={{backgroundColor:'white',padding:10,paddingBottom:10,borderRadius:15,alignSelf:'flex-start'}}>
                                            {
                                                !message.audio.isPlay ?  
                                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                                                    <Icon type="entypo" size={20} name="controller-play" color="black" onPress={()=>this.Play(message)} raised/>
                                                    <Slider value={0} thumbStyle={{width:30,height:15}} thumbTintColor="#3265b0" style={{width:100}} minimumTrackTintColor="#3265b0" />
                                                </View>
            
                                            : 
                                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                                                      <Icon type="entypo" size={20} name="controller-paus" color="black" onPress={()=> this.Pause(message)}raised/>
                                                      <Slider value={this.state.progress} maximumValue={this.state.time} thumbStyle={{width:30,height:15}} thumbTintColor="#3265b0" style={{width:100}} minimumTrackTintColor="#3265b0"/>
                                                </View>
                                            }
                                            {/* <Text style={{marginTop:5,color:'gray',fontSize:12}}>{message.createdAt.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</Text> */}
                                          </View>
                                      </View>
                                  </View>
                                
                                      
                            }
                              
                          </View>
                            
                        )
                      }

                        
                      else
                      {
                        return(
                                
                          <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',width:'100%',marginTop:5}}>
                            <View style={{width:'83%'}}>
                                <View style={{backgroundColor:'#3265b0',padding:10,paddingBottom:10,borderRadius:15,alignSelf:'flex-end'}}>
                                    {
                                      message.text !== '' ? <Text style={{color:'white'}}>{message.text}</Text>

                                      : message.image !== '' ?
                                       
                                          <View>
                                              <TouchableOpacity style={{width:150, height:150 }} onPress={()=>this.handlePriviewImage(message._id)} >
                                                  <Image style= {{alignSelf:'center',width:'100%',height:'100%'}} resizeMode={'stretch'} source={{uri:message.image}}/>
                                              </TouchableOpacity>
                                      
                                              <Overlay isVisible={this.state.overlay} overlayStyle={{backgroundColor:'transparent',borderColor:'transparent',elevation: 0, shadowOpacity: 0}}  onBackdropPress={()=>this.setState({overlay:!this.state.overlay})}>
                                                  {
                                                    console.log(this.state.imageUri)
                                                  }
                                                  <Image style= {{alignSelf:'center',width:'100%',height:'100%'}} resizeMode={'contain'} source={{uri:this.state.imageUri}}/>
                                              </Overlay>
                                          </View>
                                      :
                                      !message.audio.isPlay ? this.state.isLoad?
                                      <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                                     <ActivityIndicator color="white" size="large" />
                                      <Slider value={0} thumbStyle={{width:30,height:15}} thumbTintColor="white" style={{width:100}} minimumTrackTintColor="white" />
                                  </View>
                                      :
                                          <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                                              <Icon type="entypo" size={20} name="controller-play" color="#3265b0" onPress={()=>this.Play(message)} raised/>
                                              <Slider value={0} thumbStyle={{width:30,height:15}} thumbTintColor="white" style={{width:100}} minimumTrackTintColor="white" />
                                          </View>

                                      : 
                                          <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                                                <Icon type="entypo" size={20} name="controller-paus" color="#3265b0" onPress={()=> this.Pause(message)}raised/>
                                                <Slider value={this.state.progress} maximumValue={this.state.time} thumbStyle={{width:30,height:15}} thumbTintColor="white" style={{width:100}} minimumTrackTintColor="white"/>
                                          </View>
                                      
                                    }
                                    {/* <Text style={{marginTop:5,color:'#eeeeee',fontSize:12,textAlign:'right'}}>{message.createdAt.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</Text> */}
                                </View>
                            </View>
                        </View>

                        )
                      }
                        
                  })
                }
              </View>
            </ScrollView>

            <View style={styles.footer}>
              <View style={{width:'18%'}}>
                  <TouchableOpacity onPress={this.handleImagePicker} >
                      <Icon type="antdesign" name="camerao" color="#3265b0" size={25} raised />
                  </TouchableOpacity>
              </View>
              <View style={{width:'70%'}}>
                  <Input 
                    placeholder="type message" 
                    inputContainerStyle={{width:'100%',borderWidth:1,bordercolor:'gray',backgroundColor:'white',borderRadius:50}} 
                    inputStyle={{paddingLeft:10,fontSize:16}} 
                    rightIcon={()=><Icon type="feather" name="send" color="#3265b0" size={25} onPress={this.onSendTextMessage} />}
                    rightIconContainerStyle={{paddingRight:10}}
                    onChangeText={(value)=>this.setState({input:value})}
                    value={this.state.input}

                  />
                    
              </View>
              <View style={{width:'18%'}}>
                {
                  !this.state.recording ?
                
                      <TouchableOpacity delayLongPress={1500} onPress={this.start} >
                          <Icon type="entypo" name="mic" color="#3265b0" raised  />
                      </TouchableOpacity>

                  :

                      <TouchableOpacity onPress={this.stop} >
                          <Icon type="entypo" name="controller-stop" color="red" raised  />
                      </TouchableOpacity>

                }
              </View>
              
            </View>
        </View>
      )
    }
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      height:hp('100%')
  },
  header:{
        width:wp('100%'),
        height:hp('20%'),
        backgroundColor:'#3265b0',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'center',
        padding:30
  },
  body:{
    width:wp('100%'),
    padding:10,
  },
  footer:{
    width:'100%',
    height:hp('10%'),
    backgroundColor:'#eeeeee',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  }
})


export default Chat;


