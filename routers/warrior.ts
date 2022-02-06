import {Router, Request, Response} from 'express';
import {WarriorRecord} from "../records/warrior.record";

export const warriorRouter = Router();

warriorRouter
    .get('/', async (req: Request, res: Response): Promise<void> => {
        res.render('warrior');
    })
    .post('/', async (req: Request, res: Response): Promise<void> => {
        const newWarrior: WarriorRecord = new WarriorRecord(req.body);
        await newWarrior.addWarrior();
        res.redirect('/');
    })