import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Home</Text>
      <FloatingAction
        onPressMain={() => {
          navigation.navigate('DetailScreen')
        }}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#020202',
    marginTop: 24,
    marginStart: 24,
  }
})