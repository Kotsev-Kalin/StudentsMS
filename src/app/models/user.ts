import {Observable} from "rxjs";

export class User {
  id: number;
  username: string;
  password: string;
  role: string;
  authdata?: string;
}
