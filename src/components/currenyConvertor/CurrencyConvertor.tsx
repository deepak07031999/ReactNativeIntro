import {
  FlatList, KeyboardAvoidingView, Platform, Pressable,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { JSX, useState } from 'react';
import { currencyByRupee } from '../../constants/currencyConvertorConstats.ts';
import CurrencyButton from './CurrencyButton.tsx';
import Snackbar from 'react-native-snackbar';
import { Currency } from '../../interface/currencyConvertorInterface.ts';

interface CurrencyConvertorProps {
  onBack: ()=>void;
}

export default function CurrencyConvertor(props: CurrencyConvertorProps): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
  }

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
          <Text style={styles.titleText}>
            Currency Convertor
          </Text>
          <View style={styles.topContainer}>
            <View style={styles.rupeesContainer}>
              <Text style={styles.rupee}>₹</Text>
              <TextInput
                maxLength={14}
                value={inputValue}
                clearButtonMode='always' // only for ios
                onChangeText={setInputValue}
                keyboardType='number-pad'
                placeholder='Enter amount in Rupees'
                style={styles.inputAmountField}
              />
            </View>
            {resultValue && (
              <Text style={styles.resultTxt} >
                {resultValue}
              </Text>
            )}
          </View>
          <View style={styles.bottomContainer}>
            <FlatList
              numColumns={3}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              keyboardShouldPersistTaps="handled"
              renderItem={({item}) => (
                <Pressable
                  style={[
                    styles.button,
                    targetCurrency === item.name && styles.selected
                  ]}
                  onPress={() => buttonPressed(item)}
                >
                  <CurrencyButton {...item} />
                </Pressable>
              )}
            />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  bottomContainer:{
    flex: 3
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex:1,
    backgroundColor: '#6c6565',
    paddingBottom: 10,
  },
  scrollContent:{
    paddingBottom: 30,
  },
  keyboardView:{
    flex: 1
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
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  inputAmountField: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    flex: 1,
    margin: 12,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    justifyContent: 'center',  // Add this
    alignItems: 'center',      // Add this
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
})