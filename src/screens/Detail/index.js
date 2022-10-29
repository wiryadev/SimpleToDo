import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailScreen = ({ navigation }) => {

  return (
    <View style={styles.page}>
      <Text>ToDo Detail</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  container: {
    backgroundColor: 'white',
    marginTop: 16,
    padding: 24,
    flex: 1,
  },
})