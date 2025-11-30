import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Yup from 'yup';

interface PasswordGeneratorProps {
  onBack: ()=>void;
}

// const PasswordSchema = Yup.object({
//   passwordLength: Yup.number()
//     .max(4, 'should be min of 4 characters')
//     .max(16, 'should be max of 16 characters')
//     .required('Length is required')
// });

export default function PasswordGenerator(props: PasswordGeneratorProps){
  return(
    <View style={styles.View}>
      <TouchableOpacity
        onPress={props.onBack}
        style={styles.backButton}
      >
        <Text style={styles.backText}>
          Back to Home
        </Text>
      </TouchableOpacity>
      <Text>
        Password Generator
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
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