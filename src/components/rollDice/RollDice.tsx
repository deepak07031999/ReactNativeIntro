import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../../../assests/One.png'
import DiceTwo from '../../../assests/Two.png'
import DiceThree from '../../../assests/Three.png'
import DiceFour from '../../../assests/Four.png'
import DiceFive from'../../../assests/Five.png'
import DiceSix from'../../../assests/Six.png'
import { JSX, useState } from 'react';
import Dice from './Dice.tsx';


interface RollDiceProps {
  onBack: ()=>void;
}

export default function RollDice(props: RollDiceProps): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  };

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;

      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
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
      <ScrollView style={styles.scrollView}>
        <Text style={styles.titleText}>
          Dice Game
        </Text>
        <Dice imageUrl={diceImage}/>
        <TouchableOpacity
          onPress={rollDiceOnTap}
          style={styles.rollButton}
        >
          <Text style={styles.rollButtonText}>
            Roll the dice
          </Text>
        </TouchableOpacity>
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
  },
  rollButton:{
    backgroundColor: '#27AE60',
    borderRadius: 10,
    width: 100,
    height: 60,
    alignItems: 'center',
    alignSelf: 'center'
  },
  rollButtonText:{
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})