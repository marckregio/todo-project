export interface Create {
	title: string,
	description: string,
}

export interface Update {
	id: number,
	title: string,
	description: string,
}

export interface Todo {
	id: number,
	title: string,
	description: string,
	createdAt: Date,
	updatedAt: Date
}

export interface TodoList {
	list: Array<any>
}

export interface TodoListRequest { 
	limit: number;
	page: number;
}

export interface ErrorResponse {
	code: number;
	message: string;
}