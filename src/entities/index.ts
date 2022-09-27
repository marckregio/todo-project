import { Sequelize } from 'sequelize-typescript';
import { TodoService } from '../services/todo.service';

const DATABASE_URL = process.env.DATABASE_URL || 
	'postgres://sa:adminadmin@localhost:5432/todo_project';
const DATABASE_SSL = false;
const DATABASE_RESET = false;

let sqlize = new Sequelize(DATABASE_URL, {
	storage: ':memory:',
	dialect: 'postgres',
	models: [__dirname + '/tables']
});

if (DATABASE_SSL) {
	sqlize = new Sequelize(DATABASE_URL, {
		storage: ':memory:',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: DATABASE_SSL,
				rejectUnauthorized: false
			}
		},
		models: [__dirname + '/tables']
	});
}

export const initializeDatabase = () => {
	sqlize.authenticate()
		.then(() => {
			console.log('Database Connected');
			sqlize.sync({force: DATABASE_RESET})
				.then(async () => {
					const Todo = new TodoService();
					await Todo.GenerateTODO();
				});
		});
};

