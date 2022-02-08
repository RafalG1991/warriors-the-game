import {Router} from 'express';
import {WarriorRecord} from "../records/warrior.record";

export const hallOfFameRouter = Router();

hallOfFameRouter.get('/', async (req, res) => {
    const warriorList = (await WarriorRecord.getAll()).slice(0,10);
    res.render('hallOfFame', {
        warriorList,
    });
});