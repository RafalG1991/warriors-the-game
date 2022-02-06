import * as express from 'express';
import {urlencoded, static as eStatic} from 'express';
import {engine} from 'express-handlebars';
import {handlebarsHelpers} from "./utils/handlebars-helpers";
import 'express-async-errors';
//routers
import {menuRouter} from "./routers/menu";
import {warriorRouter} from "./routers/warrior";
//db
import './utils/db';
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

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
});
