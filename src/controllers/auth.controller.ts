import { Hidden, Post, Route, Security, Tags } from "tsoa";
import { CommonControllers } from "./base.controller";
import { Authentication, Login } from "./../interfaces/authentication"
import { AuthService } from "../services/auth.service";
@Tags("authenticate")
@Route()
export class AuthenticationController extends CommonControllers{
	
	@Hidden()
	@Post("authenticate")
	public async authenticate(): Promise<Authentication> {
		const requestObject: Login = {
			name: "guest"
		}

		const token = await AuthService().authenticate(requestObject);
		return { token: `Bearer ${token}` };
	}

	
	constructor() {
		super('AuthenticationController');
	}
}