import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function FlatCards (){
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Flat Cards
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.flexRed}>
            <Text style={styles.text}>
              Red
            </Text>
          </View>
          <View style={styles.flexGreen}>
            <Text style={styles.text}>
              Green
            </Text>
          </View>
          <View style={styles.flexBlue}>
            <Text style={styles.text}>
              Blue
            </Text>
          </View>
          <View style={styles.flexBlue}>
            <Text style={styles.text}>
              Blue
            </Text>
          </View>
          <View style={styles.flexBlue}>
            <Text style={styles.text}>
              Blue
            </Text>
          </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10
    // backgroundColor: '#322f2f',
  },
  header: {
    // backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 30,
    width:  "100%",
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#fff',
    paddingHorizontal: 10,
    gap: 15,
  },
  text: {
    fontSize: 16,
    color: '#f6f4f4',
  },
  flexRed:{
    // flex: 1,
    backgroundColor: '#FF000FFF',
    height: 100,
    width: 100,
    // marginLeft: 15,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  flexGreen: {
    // flex: 1,
    backgroundColor: '#61e1b4',
    height: 100,
    width: 100,
    // marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  flexBlue: {
    // flex: 1,
    backgroundColor: '#0000FF',
    height: 100,
    width: 100,
    // marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})