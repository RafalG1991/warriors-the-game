import {Router} from 'express';
import {WarriorRecord} from "../records/warrior.record";

export const hallOfFameRouter = Router();

hallOfFameRouter.get('/', async (req, res) => {
    const warriorList = await WarriorRecord.getAll();
    res.render('hallOfFame', {
        warriorList,
    });
});