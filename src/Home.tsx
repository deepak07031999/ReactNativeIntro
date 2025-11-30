import Cards from './components/cards/Cards.tsx';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import PasswordGenerator from './components/passwordGenerator/PasswordGenerator.tsx';
import RollDice from './components/rollDice/RollDice.tsx';

export default function Home (){
  const [currentView, setCurrentView] = useState('rollDice');

  const renderContent = () => {
    switch(currentView) {
      case 'cards':
        return <Cards onBack={() => setCurrentView('home')} />;
      case 'password':
        return <PasswordGenerator onBack={() => setCurrentView('home')} />;
      case 'rollDice':
        return <RollDice onBack={()=>{setCurrentView('home')}}/>
      default:
        return (
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={() => setCurrentView('cards')}
              style={[styles.button, styles.buttonBlue]}
            >
              <Text style={styles.linkText}>View Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentView('password')}
              style={[styles.button, styles.buttonRed]}
            >
              <Text style={styles.linkText}>Password Generator</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentView('rollDice')}
              style={[styles.button, styles.buttonGreen]}
            >
              <Text style={styles.linkText}>Roll The Dice</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return(
    <View style={styles.view}>
      {renderContent()}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex:1,
    backgroundColor: '#6c6565'
  },
  linkContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonBlue: {
    backgroundColor: '#4A90E2',
  },
  buttonRed: {
    backgroundColor: '#E74C3C',
  },
  buttonGreen: {
    backgroundColor: '#27AE60',
  },

  linkText: {
    fontSize: 18,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  }

})