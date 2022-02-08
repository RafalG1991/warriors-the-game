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
    public hp: number;

    constructor(obj: WarriorRecord) {
        if (!obj.name) {
            throw new ValidationError('You must choose unique name!');
        }
        if (
            Number(obj.str)+Number(obj.def)+Number(obj.end)+Number(obj.agi)!==10 ||
            Number(obj.str)>10 || Number(obj.def)>10 || Number(obj.end)>10 || Number(obj.agi)>10
        ) {
            throw new ValidationError('You have 10 skill points to distribute!');
        }

        if (
            Number(obj.str)<=0 || Number(obj.def)<=0 || Number(obj.end)<=0 || Number(obj.agi)<=0
        ) {
            throw new ValidationError('Each attribute must be greater than zero!');
        }



        this.id = obj.id;
        this.name = obj.name;
        this.str = Number(obj.str);
        this.def = Number(obj.def);
        this.end = Number(obj.end);
        this.agi = Number(obj.agi);
        this.wins = Number(obj.wins);
        this.hp = obj.end*10;
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

    static async getOne(id: string): Promise<WarriorRecord> {
        const [results] = await pool.execute("SELECT * FROM `warriors` WHERE `id` = :id", {
            id,
        }) as WarriorRecordResults;
        return results.length === 0 ? null : new WarriorRecord(results[0]);
    }

    async addWin(): Promise<void> {
        await pool.execute("UPDATE `warriors` SET `wins` = :wins WHERE `id` = :id", {
            id: this.id,
            wins: this.wins+1,
        });
    }
}