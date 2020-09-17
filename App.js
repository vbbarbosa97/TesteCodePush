import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import codePush from 'react-native-code-push';

const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};

const App = () => {
  useEffect(()=>{
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE})
  },[])
  return (
    <View>
      <Text>Meu Quinto teste com codePush  - vinicius batista barbosa</Text>
      <TouchableOpacity
        onPress={() => Alert.alert('Ola vinicius')}
        style={{backgroundColor: 'red'}}>
        <Text>Teste botao</Text>
      </TouchableOpacity>
    </View>
  );
};

export default codePush(codePushOptions)(App);
