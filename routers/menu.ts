import {Router} from 'express';
import {WarriorRecord} from "../records/warrior.record";

export const menuRouter = Router();

menuRouter.get('/', async (req, res) => {
  res.render('menu');
});