import TodoTable from "../entities/tables/TodoTable";
import { Create, ErrorResponse, Todo, TodoList, TodoListRequest, Update } from "../interfaces/todo";

export class TodoService {

	public async GenerateTODO(): Promise<void> {
		try {
			//add 20 items if no data
			const todoListLength = await TodoTable.count();
			if (todoListLength == 0) {
				const limit = 20;
				const insertArr = [];
				for (let i = 0; i < limit; i++) {
					insertArr.push({ title: `Todo Item: ${i}`, description: 'This is my todo item' });
				}
				await TodoTable.bulkCreate(insertArr);
			}
		} catch (err: any) {
			console.log('Error generating data', err);
		}
	}

	public async Add(req: any): Promise<ErrorResponse> {
		try {
			const response = await TodoTable.create(req);
			if (response !== null) {
				return { code: 200, message: 'Successfully added.'};
			} else {
				return { code: 400, message: 'Something went wrong.'}
			}
		} catch (err: any) {
			return { code: 500, message: err };
		}
	}

	public async Update(req: any): Promise<ErrorResponse> {
		try {
			const response = await TodoTable.update(req, { where: { id: req.id }});
			if (response !== null) {
				return { code: 200, message: 'Successfully updated.'};
			} else {
				return { code: 400, message: 'Something went wrong.'}
			}
		} catch (err: any) {
			return { code: 500, message: err };
		}
	}

	public async Delete(id: number): Promise<ErrorResponse> {
		try {
			const response = await TodoTable.destroy({ where: { id: id }});
			if (response !== null) {
				return { code: 200, message: 'Successfully deleted.'};
			} else {
				return { code: 400, message: 'Something went wrong.'}
			}
		} catch (err: any) {
			return { code: 500, message: err };
		}
	}

	public async GetAll(req: TodoListRequest): Promise<TodoList | ErrorResponse> {
		try {
			const response = await TodoTable.findAndCountAll({ limit: req.limit, offset: req.page * req.limit })
			return { list: response.rows }
		} catch (err: any) {
			return { code: 500, message: err };
		}
	}

	public async GetOne(id: number): Promise<Todo | ErrorResponse> {
		try {
			const response = await TodoTable.findOne({ where: { id: id }});
			return response["dataValues"]
		} catch (err: any) {
			return { code: 500, message: err };
		}
	}
}