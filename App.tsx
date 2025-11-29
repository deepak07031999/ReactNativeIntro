import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards.tsx';
import ElevatedCards from './components/ElevatedCards.tsx';
import FancyCards from './components/FancyCards.tsx';
import ActionCard from './components/ActionCard.tsx';
import ContactList from './components/ContactList.tsx';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={style.safeAreaView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={style.scrollView}>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaView:{
    flex:1,
    backgroundColor: '#6c6565'
  },
  scrollView: {
    flex:1,
    backgroundColor: '#6c6565'
  }
})

export default App;
