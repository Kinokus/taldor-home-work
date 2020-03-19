import express = require('express');
import bodyParser = require('body-parser');
import {Tools} from "./tools";
import {Movie} from "./movie";

const app: express.Application = express();
app.use(bodyParser.json());

let movies: Movie[] = [];

class Category {

    constructor(id: number, name: string, ageStrict: number) {
        this.id = id;
        this.name = name;
        this.ageStrict = ageStrict;
    }

    id: number;
    name: string;
    ageStrict: number;
}

let categories: Category[] = [
    new Category(0, 'documentary', 0),
    new Category(1, 'detective', 12),
    new Category(2, 'comedy', 6),
    new Category(3, 'adult comedy', 21),
];
for (let i = 1; i < 100; i++) {
    movies.push(new Movie(i, Tools.generateName(), Tools.getRandomInt(0, categories.length - 1), '', ''))
}


app.use('/', express.static('../client/dist/taldor-client'));
app.use('/login', express.static('../client/dist/taldor-client'));
app.use('/secure', express.static('../client/dist/taldor-client'));

app.get('/api/categories', getCategories);

function getCategories(req, res) {
    res.send(categories);
}


app.post('/api/login', userLogin);

function userLogin({body}, res) {
    let isLogged = false;
    if (body.user === 'admin' && body.password === 'admin') {
        isLogged = true;
    }
    res.send({isLogged})

}


app.get('/api/movies', getMovies);

function getMovies(req, res) {
    if (req.query.categoryId) {
        const moviesFiltered = movies.filter(m => m.category === req.query.categoryId);
        res.send(moviesFiltered)
    } else {
        res.send(movies);
    }
}

app.delete('/api/movie', (deleteMovie));

function deleteMovie(req, res) {
    // console.log(safeJsonStringify(req));
    const movieToDelete = movies.find(m => m.id === parseInt(req.body.id));
    console.log(req.body.id);
    if (movieToDelete) {
        res.send({movieToDelete});
    } else {
        const reason = 'Movie not found';
        res.status(404).send({reason})
    }
}

app.get('/', getIndex);

function getIndex(req, res) {
    res.send('indexJs');
}

app.listen(80, function () {
});