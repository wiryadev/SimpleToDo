const { createContext, useState, useCallback } = require("react");

export const ToDoContext = createContext({
  toDoList: [],
  addToDo: () => { },
})

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([])

  const addToDo = useCallback((toDo) => {
    setToDos((prevState) => [...prevState, toDo])
  }, [],
  )

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        addToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  )

}