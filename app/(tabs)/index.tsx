import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    
     <View style={styles.container}>
       <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.beeDNg-FIi6C6tEPvzth7gHaNK?w=115&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7' }} 
        style={styles.image}
      />
    <Text style={styles.text}>WELCOME TO MY APP!</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AA7A8C',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#99004C',
    padding: 6,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200, 
    borderWidth: 4,
    borderColor: '#99004C',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});