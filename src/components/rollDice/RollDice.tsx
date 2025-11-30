import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RollDiceProps {
  onBack: ()=>void;
}

export default function RollDice(props: RollDiceProps){
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
      <Text style={styles.titleText}>
        Roll the dice
      </Text>
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
  },
  titleText:{
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})