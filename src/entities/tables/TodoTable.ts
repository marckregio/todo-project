import { Column, Table, Model } from "sequelize-typescript";

@Table({ tableName: 'Todo' })
export default class TodoTable extends Model {
	@Column title: string;
	@Column description: string;
}