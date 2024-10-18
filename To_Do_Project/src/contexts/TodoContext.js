import {createContext,useContext} from 'react';
export const TodoContext = createContext({
    todos:[
        {
            id:"",
            todo:"",
             completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    removeTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider  = TodoContext.Provider