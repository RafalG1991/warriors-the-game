import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';

export class WarriorRecord {
    public id?:string;
    public name: string;
    public str: string;
    public def: string;
    public end: string;
    public agi: string;
    public wins?: number;

    constructor(obj: WarriorRecord) {
        this.id = obj.id;
        this.name = obj.name;
        this.str = obj.str;
        this.def = obj.def;
        this.end = obj.end;
        this.agi = obj.agi;
        this.wins = obj.wins;
    }

    async addWarrior(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `warrior`(`id`, `name`, `str`, `def`, `end`, `agi`) VALUES(:id, :name, :str, :def, :end, :agi)", {
            id: this.id,
            name: this.name,
            str: this.str,
            def: this.def,
            end: this.end,
            agi: this.agi,
        });
        return this.id;
    };

}