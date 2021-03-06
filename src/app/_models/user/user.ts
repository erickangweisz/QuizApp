export class User {
    private _id: string;
    private _email: string;
    private _password: string;
    private _username: string;
    private _role: string;
    private _token?: string;

    constructor() {}

    get id(): string { return this._id; }
    set id(id: string) { this._id = id; }

    get email(): string { return this._email; }
    set email(email: string) { this._email = email; }

    get password(): string { return this._password; }
    set password(password: string) { this._password = password; }

    get username(): string { return this._username; }
    set username(username: string) { this._username = username; }

    get role(): string { return this._role; }
    set role(role: string) { this._role = role; }

    get token(): string { return this._token; }
    set token(token: string) { this._token = token; }
}
