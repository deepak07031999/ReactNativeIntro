import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';
import Home from './components/Home.tsx';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={style.safeAreaView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home/>
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
