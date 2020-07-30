import React,{Component} from 'react';
import {Button,Card,Divider,Text,Icon,Avatar} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

class Home extends Component{
    render(){
        return (
            <View style={styles.Container}>
                <View style={{backgroundColor:'#0b7253',padding:10,width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                      
                </View>
                <Button 
                  containerStyle={{width:'100%',borderBottomWidth:1,borderBottomColor:'lightgray'}}
                  title="Home" 
                  titleStyle={{color:'black',marginLeft:15,fontSize:18}} 
                  buttonStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
                  type="clear" 
                  icon={<Icon type="antdesign" name="home" color="#0b7253" />}
                  onPress={()=>this.props.navigation.navigate('Home')}
                />

                <Button 
                  containerStyle={{width:'100%',borderBottomWidth:1,borderBottomColor:'lightgray'}}
                  title="Profile" 
                  titleStyle={{color:'black',marginLeft:15,fontSize:18}} 
                  buttonStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
                  type="clear" 
                  icon={<Icon type="antdesign" name="profile" color="#0b7253" />}
                  onPress={()=>this.props.navigation.navigate('Profile')}
                />

                <Button 
                  containerStyle={{width:'100%',borderBottomWidth:1,borderBottomColor:'lightgray'}}
                  title="Favorites" 
                  titleStyle={{color:'black',marginLeft:15,fontSize:18}} 
                  buttonStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
                  type="clear" 
                  icon={<Icon type="material" name="favorite-border" color="#0b7253" />}
                  onPress={()=>this.props.navigation.navigate('Wishes')}
                />

                <Button 
                  containerStyle={{width:'100%',borderBottomWidth:1,borderBottomColor:'lightgray'}}
                  title="Add Item" 
                  titleStyle={{color:'black',marginLeft:15,fontSize:18}} 
                  buttonStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
                  type="clear" 
                  icon={<Icon type="entypo" name="add-to-list" color="#0b7253" />}
                  onPress={()=>this.props.navigation.navigate('AddItem')}
                />

                <Button 
                  containerStyle={{width:'100%',borderBottomWidth:1,borderBottomColor:'lightgray'}}
                  title="My Items" 
                  titleStyle={{color:'black',marginLeft:15,fontSize:18}} 
                  buttonStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
                  type="clear" 
                  icon={<Icon type="feather" name="list" color="#0b7253" />}
                  onPress={()=>this.props.navigation.navigate('MyItems')}
                />

                <Button title="Sign Out" buttonStyle={{backgroundColor:'#0b7253',alignSelf:'center',marginTop:50,width:100}}/>
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    alignItems:'center',
  },
});

export default Home;
