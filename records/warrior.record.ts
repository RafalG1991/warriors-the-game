import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';
import {WarriorRecordResults} from "../types/warrior-type";

export class WarriorRecord {
    public id?:string;
    public name: string;
    public str: number;
    public def: number;
    public end: number;
    public agi: number;
    public wins?: number;

    constructor(obj: WarriorRecord) {
        if (!obj.name) {
            throw new ValidationError('You must choose unique name!');
        }
        if (
            (Number(obj.str)+Number(obj.def)+Number(obj.end)+Number(obj.agi)>10) ||
            Number(obj.str)>10 || Number(obj.def)>10 || Number(obj.end)>10 || Number(obj.agi)>10
        ) {
            console.log(obj);
            throw new ValidationError('You have only 10 skill points to distribute!');
        }

        this.id = obj.id;
        this.name = obj.name;
        this.str = obj.str;
        this.def = obj.def;
        this.end = obj.end;
        this.agi = obj.agi;
        this.wins = obj.wins;
    }

    static async checkUniqueName(name: string): Promise<boolean> {
        const results = await WarriorRecord.getAll();
        return results.filter(warrior => warrior.name === name).length === 0;
    }

    async addWarrior(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
        }

        if (!(await WarriorRecord.checkUniqueName(this.name))) {
            throw new ValidationError('Your name must be unique!');
        }

        await pool.execute("INSERT INTO `warriors`(`id`, `name`, `str`, `def`, `end`, `agi`) VALUES(:id, :name, :str, :def, :end, :agi)", {
            id: this.id,
            name: this.name,
            str: this.str,
            def: this.def,
            end: this.end,
            agi: this.agi,
        });
        return this.id;
    };

    static async getAll(): Promise<WarriorRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `warriors` ORDER BY `wins` DESC") as WarriorRecordResults;
        return results.map(warrior => new WarriorRecord(warrior));
    }

}