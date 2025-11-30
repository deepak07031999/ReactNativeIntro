import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import * as Yup from 'yup';
import { useState } from 'react';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface PasswordGeneratorProps {
  onBack: ()=>void;
}

const PasswordSchema = Yup.object({
  passwordLength: Yup.number()
    .max(4, 'should be min of 4 characters')
    .max(16, 'should be max of 16 characters')
    .required('Length is required')
});

export default function PasswordGenerator(props: PasswordGeneratorProps){

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number)=>{
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) characterList += upperCaseChars
    if (lowerCase) characterList += lowerCaseChars
    if (numbers) characterList += digitChars
    if (symbols) characterList += specialChars

    const passwordResult = createPassword(characterList, passwordLength )

    setPassword(passwordResult);
    setIsPassGenerated(true);
  }

  const createPassword =
    (characters:  string, passwordLength: number)=>{
    let result ='';
    for( let i=0;i<passwordLength;i++){
      const characterIndex = Math.round(Math.random()* characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }
  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  // Add this function
  const copyToClipboard = () => {
    Clipboard.setString(password);
  };

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
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>
            Password Generator
          </Text>
        <Formik
          initialValues={{
            passwordLength: '',
          }}
          validationSchema={PasswordSchema}
          onSubmit={values => {
            generatePasswordString(+values.passwordLength);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.formContainer}>
              <View style={styles.formRow}>
                <Text style={styles.label}>
                  Enter password length
                </Text>
                <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  onBlur={handleBlur('passwordLength')}
                  placeholder="Enter password length"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>
                  Include Uppercase
                </Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)}
                  fillColor="#FED85D"
                />
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>
                  Include Numbers
                </Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                  fillColor="#C9A0DC"
                />
              </View>

              <View style={styles.formRow}>
                <Text style={styles.label}>
                  Include Symbols
                </Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={symbols}
                  onPress={() => setSymbols(!symbols)}
                  fillColor="#FC80A5"
                />
              </View>

              {errors.passwordLength && touched.passwordLength ? (
                <Text style={styles.errorText}>{errors.passwordLength}</Text>
              ) : null}
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.primaryBtn} onPress={handleSubmit}>
                  <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resetBtn} onPress={resetPasswordState}>
                  <Text style={styles.primaryBtnTxt}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
        {isPassGenerated && (
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Generated Password:</Text>
            <Text style={styles.password}>{password}</Text>
            <TouchableOpacity style={styles.copyBtn} onPress={copyToClipboard}>
              <Text style={styles.copyBtnTxt}>Copy to Clipboard</Text>
            </TouchableOpacity>
          </View>
        )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c6565',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30
  },
  formContainer: {
    marginBottom: 20
  },
  formRow:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 15
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
    fontWeight: '500'
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
  inputStyle: {
    width: 80,
    padding: 12,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#16213e',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
    marginHorizontal: 15
  },
  primaryBtn: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 8,
    marginTop: 20,
    backgroundColor: '#5DA3FA'
  },
  resetBtn: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 8,
    marginTop: 20,
    backgroundColor: '#E74C3C'
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 15
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16
  },
  passwordContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5
  },
  passwordText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  password: {
    fontSize: 20,
    fontFamily: 'monospace',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
    color: '#2c3e50'
  },
  copyBtn: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8
  },
  copyBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  keyboardView: {
    flex: 1
  }
})