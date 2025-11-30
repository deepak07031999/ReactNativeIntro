import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { PropsWithChildren } from 'react';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

export default function Dice(props: DiceProps){
  return(
    <View style={styles.imageContainer}>
      <Image
        style={styles.diceImage}
        source={props.imageUrl}/>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer:{
    flex: 1
  },
  diceImage:{
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 30,
  }
})