import { StyleSheet, Text, View } from 'react-native';
import { PropsWithChildren } from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string
  flag: string
}>


export default function CurrencyButton (props: CurrencyButtonProps){
  return(
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>
        {props.flag}
      </Text>
      <Text style={styles.countryName}>
        {props.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flag: {
    fontSize: 28,
    color: "#FFFFFFFF",
    marginBottom: 4,
    justifyContent: 'center',
  },
  countryName: {
    fontSize: 15,
    color: "#2d3436",
    marginBottom: 4
  }
})