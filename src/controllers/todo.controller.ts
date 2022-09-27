import { CommonControllers } from "./base.controller";
import { Body, Delete, Get, Path, Post, Put, Query, Route, Security, Tags } from "tsoa";
import { Create, ErrorResponse, Todo, TodoList, Update } from "../interfaces/todo";
import { TodoService } from "../services/todo.service";

@Tags("todo")
@Route("api")
export class TodoController extends CommonControllers {
	
	/*
	* Generate API TOKEN first using POST http://localhost:4001/authenticate,
	* Then add generated TOKEN to AUTHORIZATION header of the request.
	*/

	@Security("api_key")
	@Get("get-all")
	public async GetAll(@Query() limit: number, @Query() page: number): Promise<TodoList | ErrorResponse> {
		const Todo = new TodoService();
		const response = await Todo.GetAll({ limit, page });
		return response;
	}

	@Security("api_key")
	@Get("get-one/{id}")
	public async GetOne(@Path() id: number): Promise<Todo | ErrorResponse> {
		const Todo = new TodoService();
		const response = await Todo.GetOne(id);
		return response;
	}

	@Security("api_key")
	@Post("add")
	public async Add(@Body() requestBody: Create): Promise<ErrorResponse> {
		const Todo = new TodoService();
		const response = await Todo.Add(requestBody as Create);
		return response;
	}

	@Security("api_key")
	@Put("update")
	public async Update(@Body() requestBody: Update): Promise<ErrorResponse> {
		const Todo = new TodoService();
		const response = await Todo.Update(requestBody);
		return response;
	}

	@Security("api_key")
	@Delete("delete/{id}")
	public async Delete(@Path() id: number): Promise<ErrorResponse> {
		const Todo = new TodoService();
		const response = await Todo.Delete(id);
		return response;
	}


	constructor() {
		super('TodoController');
	}
}
