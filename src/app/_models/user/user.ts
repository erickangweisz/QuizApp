export class User {
    private _id: string;
    private _email: string;
    private _username: string;
    private _role: string;

    constructor() {}

    get id(): string { return this._id; }
    set id(id: string) { this._id = id; }

    get email(): string { return this._email; }
    set email(email: string) { this._email = email; }

    get username(): string { return this._username; }
    set username(username: string) { this._username = username; }

    get role(): string { return this._role; }
    set role(role: string) { this._role = role; }
}
