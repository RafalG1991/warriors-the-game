import {Router, Request, Response} from 'express';
import {WarriorRecord} from "../records/warrior.record.js";
import {Arena} from "../classes/arena.js";

export const arenaRouter = Router();

arenaRouter
    .get('/', async (req: Request, res: Response): Promise<void> => {
        const warriors: WarriorRecord[] = await WarriorRecord.getAll();
        res.render('arena', {
            warriors,
        });
    })
    .post('/', async (req: Request, res: Response): Promise<void> => {
        const warrior1: WarriorRecord = await WarriorRecord.getOne(req.body.warrior1);
        const warrior2: WarriorRecord = await WarriorRecord.getOne(req.body.warrior2);
        const arena: Arena = new Arena(warrior1, warrior2, []);
        const winner = arena.fight();
        await winner.addWin();
        res.render('fight', {
            warrior1,
            warrior2,
            winner,
            battleLog: arena.battleLog,
        });
    });