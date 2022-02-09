import * as express from 'express';
import {urlencoded, static as eStatic} from 'express';
import {engine} from 'express-handlebars';
import {handlebarsHelpers} from "./utils/handlebars-helpers";
import 'express-async-errors';
//routers
import {menuRouter} from "./routers/menu";
import {warriorRouter} from "./routers/warrior";
import { arenaRouter } from './routers/arena';
import { hallOfFameRouter } from './routers/hallOfFame';
//db
import './utils/db';
// errors handling
import {handleError} from "./utils/errors";


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
    console.log('Listening on http://localhost:3000');
});
