import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import TextField from '../../components/TextField'
import Spacer from '../../components/Spacer'
import { ToDoContext } from '../../contexts/ToDoContext'
import Button from '../../components/Button'

const AddToDoScreen = ({ navigation }) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { addToDo } = useContext(ToDoContext)

  const onSubmit = () => {
    addToDo(
      {
        title,
        content,
      }
    )
    console.log("button executed", title)
    navigation.pop()
  }

  return (
    <View style={styles.page}>
      <Spacer height={24} />
      <Text style={styles.title}>Add New Todo</Text>
      <Spacer height={32} />
      <TextField
        label="Title"
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Spacer height={16} />
      <TextField
        label="Content"
        value={content}
        onChangeText={(value) => setContent(value)}
      />
      <Spacer height={32} />
      <Button
        text="Submit"
        onPress={onSubmit}
      />
    </View>
  )
}

export default AddToDoScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24
  },
  title: {
    color: '#020202',
    fontSize: 20,
    fontWeight: 'bold',
  }
})