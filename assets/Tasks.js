import {View, SafeAreaView, Button, StyleSheet, Text} from 'react-native';

export default function TaskRender({item, remove}){

  return(
    <SafeAreaView>
      <View style = {styles.container}><Text style = {styles.text}>{item.description}</Text><Button color="#26A65B" title = "Complete?" onPress = {() =>remove(item.id)}/></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 15,
  },
  container:{
    marginBottom: 10
  }
});

