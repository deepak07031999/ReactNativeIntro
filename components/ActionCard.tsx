import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default function ActionCard(){
  
  function openWebsite(websiteLink: string){
    Linking.openURL(websiteLink);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Action Cards
      </Text>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>
            What's new in JavaScript 21 - ES12
          </Text>
          <Text style={styles.cardLabel}>
            JavaScript
          </Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.socialLinks}
              onPress={() => openWebsite('https://leetcode.com/u/deepakyadav0703/')}
            >
              <Text style={styles.socialText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialLinks}
              onPress={() => openWebsite('https://instagram.com/deepakyadav0703')}
            >
              <Text style={styles.socialText}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: 350,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageContainer: {
    height: 190,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  footer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF23B',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
  socialText: {
    fontSize: 16,
    color: '#000000',
  },
});