//import { Dropdown } from 'react-native-material-dropdown';
import React,{Component} from 'react';
import {Button,Input,Text,Image,Icon,Card,CheckBox } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

class Filter extends Component{
    state = {

      };

    render(){

        return (
              <View style={styles.container}>
                  <View style={styles.header}>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:18}}>Filter</Text>
                            <Text style={{color:'white',fontSize:12}}>Clear Filter</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.filterBody}>
                        <Card containerStyle={styles.cardStyle}>
                            <Text style={{color:'gray',fontSize:16}}>Availability</Text>
                            <View style={{marginTop:20}}>
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='Available Any Day'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='Available Today'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='Available in next 3 days'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='Available comming week'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                            </View>
                        </Card>

                        <Card containerStyle={styles.cardStyle}>
                            <Text style={{color:'gray',fontSize:16}}>Consultation Fee</Text>
                            <View style={{marginTop:20}}>
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='Free'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='1-200'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='201-500'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='500-1000'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                            </View>
                        </Card>

                        <Card containerStyle={styles.cardStyle}>
                            <Text style={{color:'gray',fontSize:16}}>Gender</Text>
                            <View style={{marginTop:20}}>
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='Male'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                                <CheckBox
                                  containerStyle={{backgroundColor:'white',borderWidth:0,padding:5,paddingLeft:0,marginLeft:0}}
                                  title='Female'
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checked={this.state.checked}
                                />
                            </View>
                        </Card>
                    </ScrollView>

                    <View style={{position:'absolute',bottom:8,display:'flex',flexDirection:'row',justifyContent:'space-around',width:wp('100%'),alignItems:'center'}}>
                      <Button title='Apply' buttonStyle={{width:wp('70%'),borderRadius:50,height:50}} />
                      <TouchableOpacity>
                        <Button 
                            title={<Text style={{color:'black',fontSize:25,color:'#3265b0'}}>X</Text>} 
                            buttonStyle={{width:wp('15%'),backgroundColor:'white',borderRadius:50,shadowColor: "#000",shadowOffset: {width: 0,height: 6,}, shadowOpacity: 0.37,shadowRadius: 7.49, elevation: 12}} 
                            containerStyle={{borderRadius:50}}
                            onPress={()=>this.props.navigation.goBack(null)}
                        />
                      </TouchableOpacity>
                    </View>
                    
              </View>
          );
    }
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        position:'relative'
    },
    header:{
        width:wp('100%'),
        height:hp('20%'),
        backgroundColor:'#3265b0',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        position:'relative',
        padding:30,
        justifyContent:'center'
    },
   filterBody:{
     width:wp('100%'),
     flex:1,
     marginTop:30,
     marginBottom:70
   },
   cardStyle:{
     borderRadius:20,
     marginTop:20
   }
})


export default Filter;


