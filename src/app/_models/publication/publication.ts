export class Publication {
    private _id: string;
    private _title: string;
    private _question: string;
    private _published: boolean;

    constructor() {}

    get id(): string { return this._id; }
    set id(id: string) { this._id = id; }

    get title(): string { return this._title; }
    set title(title: string) { this._title = title; }

    get question(): string { return this._question; }
    set question(question: string) { this._question = question; }

    get published(): boolean { return this._published; }
    set published(published: boolean) { this._published = published; }
}
