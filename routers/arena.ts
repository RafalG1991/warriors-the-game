import {Router} from 'express';
import {WarriorRecord} from "../records/warrior.record";
import {Arena} from "../classes/arena";

export const arenaRouter = Router();

arenaRouter
    .get('/', async (req, res) => {
        const warriors: WarriorRecord[] = await WarriorRecord.getAll();
        res.render('arena', {
            warriors,
        });
    })
    .post('/', async (req, res) => {
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
    })