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




class MyDoctors extends Component{
    state = {
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
          ]
      };

    render(){

        return (
              <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <Icon type="antdesign" name="close" color="white" onPress={()=>this.props.navigation.goBack(null)} />
                                <Text style={{color:'white',fontSize:18,marginLeft:10}}>My MyDoctors</Text>
                            </View>
                        </View>
                    </View>

                    <ScrollView style={styles.listBody} >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.list}
                            renderItem={({ item }) => (
                                <MyCard
                
                                    Navigate={()=>this.props.navigation.navigate("DoctorDetail")}

                                />
                            )}
                        />
                     </ScrollView>
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
    listBody:{ 
        marginTop:'-20%'
    }
})




const MyCard=(props)=>{
    return(
        <Card containerStyle={{borderRadius:15,padding:10,paddingTop:25,paddingBottom:25}}>
            <View style={{display:'flex',flexDirection:'row'}}>

                <View style={{width:'25%',alignItems:'center'}}>
                        <Avatar
                            rounded
                            size={60}
                            source={{
                                uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                </View>
                <View style={{width:'75%',paddingLeft:15}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Zeon Ranan</Text>
                    <View style={{padding:5,borderWidth:1,borderColor:'lightgray',marginTop:5}}>
                        <Text style={{fontSize:12,color:'gray'}} numberOfLines={1} >MBBS,DOMS,MS - Ophathalmology</Text> 
                        <Text style={{fontSize:12,color:'gray'}}>Ophathalmology</Text>
                        <Text style={{fontSize:12,color:'gray'}}>20 Years of experience</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:25}}>
                        <Text style={{}}>9:30AM - 8:00PM</Text>
                        <Icon type="entypo" name="message" size={25} color="gray" containerStyle={{borderWidth:1,borderColor:'lightgray',padding:10,borderRadius:50}}/>
                    </View>
                </View>

            </View>
        </Card>
    );
}



export default MyDoctors;
