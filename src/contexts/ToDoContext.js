const { createContext, useState, useCallback } = require("react");

export const ToDoContext = createContext({})

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([])

  const addToDo = (toDo) => {
    setToDos([...toDos, toDo])
  }

  const contextValue = {
    toDos: toDos, 
    addToDo: addToDo,
  }

  return (
    <ToDoContext.Provider
      value={contextValue}
    >
      {children}
    </ToDoContext.Provider>
  )

}