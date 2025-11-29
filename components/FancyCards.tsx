import { Text, View, StyleSheet, Image } from 'react-native';

export default function FancyCards(){
  return(
    <View style={style.container}>
      <Text style={style.headerText}>
        Fancy Cards
      </Text>
      <View style={style.imageFlex}>
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"
          }}
          style={style.image}
          resizeMode="cover"
          onLoad={() => console.log('Image loaded successfully')}
          onError={(error) => console.log('Image failed to load:', error.nativeEvent.error)}
        />
       </View>
      <View style={style.card}>
        <Text style={style.cardTitle}>
          Lorem ipsum
        </Text>
        <Text style={style.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

      </View>
    </View>)
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
    // backgroundColor: '#fff',
  },
  headerText:{
    fontSize: 16,
    color: '#000000',
    marginLeft: 15,
  },
  text:{
    fontSize: 16,
    color: '#000000',
  },
  imageFlex:{
    flex: 1,
    alignSelf:"center"
  },
  image:{
    width: 320,
    height: 250,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#000000",
    borderRadius: 10,
  },
  card:{
    flex: 1,
    alignSelf:"center",
    backgroundColor: "#FFFFFF",
    width: 320,
    height: 100,
    marginLeft: 15,
    marginRight: 15,
  },
  cardTitle:{
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardDescription:{
    fontSize: 12,
  }
});