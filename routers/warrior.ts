import {Router} from 'express';

export const warriorRouter = Router();

warriorRouter
    .get('/', (req, res) => {
        res.render('warrior');
    })
    .post('/', (req, res) => {
        const {name, strength, defence, endurance, agility} = req.body;
        console.log(req.body);
        res.redirect('/');
    })