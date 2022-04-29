import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../consts';

const initialState = {
	list: [
		{
			title: 'Title',
			description: 'Description',
			id: Date.now().toString(),
		},
	],
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				list: [...state.list, action.payload],
			};
		case DELETE_TODO:
			return {
				...state,
				list: state.list.filter(todo => todo.id !== action.payload),
			};
		case EDIT_TODO:
			const updateTodo = state.list.map(todo =>
				todo.id === action.payload.id
					? {
							...todo,
							title: action.payload.title,
							description: action.payload.description,
					  }
					: todo
			);

			return {
				...state,
				list: updateTodo,
			};

		default:
			return state;
	}
};
