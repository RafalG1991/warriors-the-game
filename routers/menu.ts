import {Router, Request, Response} from 'express';
import {WarriorRecord} from "../records/warrior.record.js";

export const menuRouter = Router();

menuRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  res.render('menu');
});