

const inicialState = [{
    id: 1,
    todo: 'Comprar comida',
    done: false
}];

const todoReducer = (state = inicialState, action) => {
    
    if( action?.type ==='agregar'){
        return [ ...state, action.payload];
    }
    
    return state;

}

let todos = todoReducer();

const newTodo = { 
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const addTodoAction = { 
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);



console.log(todos);