import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';


interface User {
  company: string;
  email: string;
}

export default function ApiFetch() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <ScrollView>
        <Text style={styles.text}>{JSON.stringify(data, null, 2)}</Text></ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#AA7A8C',
    padding: 20,
    flex: 1,
    
  },
  text: {
    color: 'black',
    fontFamily: 'Courier', 
  },
});
