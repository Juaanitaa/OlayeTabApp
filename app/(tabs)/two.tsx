import { StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';


import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
export default function TabTwoScreen() {
   const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View>
      
      <TextInput
        placeholder="Enter your name"
         placeholderTextColor="gray"
        value={name}
        onChangeText={setName}
        style={{
          textAlign:'center',
          alignItems: 'center',
          borderWidth: 5,
          borderColor: '#AA7A8C',
          padding: 10,
          marginBottom: 30,
          borderRadius: 8,
        }}
        className="border p-2 mb-4 rounded"
      />
      <TextInput
        placeholder="Surname"
        placeholderTextColor="gray"
        value={surname}
        onChangeText={setSurname}
        style={{
          textAlign:'center',
          borderWidth: 5,
          borderColor: '#AA7A8C',
          padding: 10,
          
          marginBottom: 30,
          borderRadius: 5,
        }}
        className="border p-2 mb-4 rounded"
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
        style={{
          
          textAlign:'center',
          borderWidth: 5,
          borderColor: '#AA7A8C',
          padding: 10,
          marginBottom: 30,
          borderRadius: 8,
        }}
        
        className="border p-2 mb-4 rounded"
      />
      
      <Button title="Update" onPress={() => alert('Profile updated!')} 
      
        />
    </View>
  );
}




  

