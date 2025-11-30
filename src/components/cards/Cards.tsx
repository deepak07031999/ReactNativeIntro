import FlatCards from './FlatCards.tsx';
import ElevatedCards from './ElevatedCards.tsx';
import FancyCards from './FancyCards.tsx';
import ActionCard from './ActionCard.tsx';
import ContactList from './ContactList.tsx';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CardsProps {
  onBack: ()=>void;
}

export default function Cards(props: CardsProps){
  return(
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onBack}
        style={styles.backButton}
      >
        <Text style={styles.backText}>
          Back to Home
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  scrollView: {
    flex:1,
    backgroundColor: '#6c6565'
  },
  backButton:{
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: '#4A90E2',
    alignSelf: 'flex-start'
  },
  backText:{
    fontSize: 18,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  }
})