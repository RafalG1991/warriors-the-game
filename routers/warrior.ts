import {Router, Request, Response} from 'express';
import {WarriorRecord} from "../records/warrior.record";

export const warriorRouter = Router();

warriorRouter
    .get('/', (req: Request, res: Response) => {
        res.render('warrior');
    })
    .post('/', async (req: Request, res: Response) => {
        const newWarrior: WarriorRecord = new WarriorRecord(req.body);
        await newWarrior.addWarrior();
        res.redirect('/');
    })