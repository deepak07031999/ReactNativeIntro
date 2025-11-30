import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ElevatedCards (){

  const cardData = [
    { id: 1, title: 'Red', color: '#FF0000' },
    { id: 2, title: 'Green', color: '#61e1b4' },
    { id: 3, title: 'Blue', color: '#0000FF' },
    { id: 4, title: 'Purple', color: '#800080' },
    { id: 5, title: 'Orange', color: '#FFA500' },
  ];
  return (
    <View style={styles.main}>
        <Text style={styles.headerText}>
          Elevated Cards
        </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        {cardData.map((card)=> (
          <View key ={card.id}
                style={[styles.card,{backgroundColor: card.color}]}
          >
            <Text style={styles.text}>
              {card.title}
            </Text>
          </View>
          ))}
      </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10
    // backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: '#f6f4f4',
  },
  card: {
    height: 100,
    width: 100,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: '#ef0606',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    }
})