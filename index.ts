import * as express from 'express';
import {urlencoded, static as eStatic} from 'express';
import {engine} from 'express-handlebars';
import {handlebarsHelpers} from "./utils/handlebars-helpers.js";
import 'express-async-errors';
//routers
import {menuRouter} from "./routers/menu.js";
import {warriorRouter} from "./routers/warrior.js";
import { arenaRouter } from './routers/arena.js';
import { hallOfFameRouter } from './routers/hallOfFame.js';
//db
import './utils/db.js';
// errors handling
import {handleError} from "./utils/errors.js";


const app = express();

app.use(urlencoded({ extended: true }));
app.use(eStatic('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
}));

app.set('view engine', '.hbs');

app.use('/', menuRouter);
app.use('/warrior', warriorRouter);
app.use('/arena', arenaRouter);
app.use('/hall-of-fame', hallOfFameRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening...');
});
