import Cards from './Cards/Cards.tsx';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import PasswordGenerator from './passwordGenerator/PasswordGenerator.tsx';

export default function Home (){
  const [currentView, setCurrentView] = useState('password');

  const renderContent = () => {
    switch(currentView) {
      case 'cards':
        return <Cards onBack={() => setCurrentView('home')} />;
      case 'password':
        return <PasswordGenerator onBack={() => setCurrentView('home')} />;
      default:
        return (
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={() => setCurrentView('cards')}
              style={[styles.button, {backgroundColor: '#4A90E2'}]}
            >
              <Text style={styles.linkText}>View Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentView('password')}
              style={[styles.button, {backgroundColor: '#E74C3C'}]}
            >
              <Text style={styles.linkText}>Password Generator</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return(
    <ScrollView style={styles.scrollView}>
      {renderContent()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    backgroundColor: '#6c6565'
  },
  linkContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  linkText: {
    fontSize: 18,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  }

})