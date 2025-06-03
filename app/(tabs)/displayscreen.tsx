import { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';

interface User {
  company: string;
  email: string;
}

export default function DisplayScreen (){
const [data, setData] = useState<User[]>([]);

 useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then(res => res.json())
      .then(setData)
  }, []);
  return (
     <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Company: {item.company}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
          </View>
      )}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {  padding: 10, borderBottomWidth: 15, borderBottomColor: 'black' },
  text: {color: 'black'},
  container: {backgroundColor: '#AA7A8C'}
});

  

