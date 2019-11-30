export class Answer {
    private _id: string;
    private _description: string;
    private _numVotes: number;
    private _idPublication: string;

    constructor() {}

    get id(): string { return this._id; }
    set id(id: string) { this._id = id; }

    get description(): string { return this._description; }
    set description(description: string) { this._description = description; }

    get numVotes(): number { return this._numVotes; }
    set numVotes(numVotes: number) { this._numVotes = numVotes; }

    get idPublication(): string { return this._idPublication; }
    set idPublication(idPublication: string) { this._idPublication = idPublication; }
}
