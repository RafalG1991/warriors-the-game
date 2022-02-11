import {Router, Request, Response} from 'express';
import {WarriorRecord} from "../records/warrior.record.js";

export const hallOfFameRouter = Router();

hallOfFameRouter.get('/', async (req: Request, res: Response): Promise<void> => {
    const warriorList: WarriorRecord[] = (await WarriorRecord.getAll()).slice(0,10);
    res.render('hallOfFame', {
        warriorList,
    });
});