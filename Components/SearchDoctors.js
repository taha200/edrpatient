import React,{Component} from 'react';
import {Button,Input,Text,Image,Icon,SearchBar,Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SearchDoctors extends Component{
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
          ]
      };

    updateSearch = search => {
    this.setState({ search });
    };
    render(){

        return (
              <View style={styles.container}>
                  <View style={styles.header}>
                        <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{width:'30%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:18}}>X</Text>
                                <Text style={{color:'white',fontSize:18}}>Doctors</Text>
                            </View>
                            <View style={{width:'18%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:14}}>Filter</Text>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Filter')}>
                                    <Icon type="antdesign" name="down" color="white" size={14} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.searchBarContainer}>
                            <View style={styles.serachBox} >
                                <SearchBar
                                    placeholder="Type Here..."
                                    onChangeText={this.updateSearch}
                                    value={this.state.search}
                                    containerStyle={{width:'100%',backgroundColor:'white',borderRadius:50,borderBottomWidth:0,shadowColor: "#000",shadowOffset: {width: 0,height: 6,}, shadowOpacity: 0.37,shadowRadius: 7.49, elevation: 12}}
                                    inputContainerStyle={{borderRadius:50,backgroundColor:'white'}}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:hp('15%'),paddingLeft:20}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Top Specialities</Text>
                    </View>
                    <ScrollView style={styles.listBody} >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.list}
                            renderItem={({ item }) => (
                                <>
                                    <Text onPress={()=>this.props.navigation.navigate('DoctorsList')}>{item.name}</Text>
                                    <Divider style={{marginTop:20,marginBottom:20}} />
                                </>
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
        height:hp('20%'),
        backgroundColor:'#3265b0',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        position:'relative',
        padding:30
    },
    searchBarContainer:{
        position:'absolute',
        top:hp('15%'),
        left:wp('5%'),
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        width:wp('100%')
    },
    serachBox:{
        width:wp('90%'),
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    listBody:{
        backgroundColor:'white',
        padding:30,
        width:wp('100%'),   
        marginTop:20,
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    }
})


export default SearchDoctors;
