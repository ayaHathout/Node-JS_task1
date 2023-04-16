import express from 'express';
import { engine } from 'express-handlebars';

const app = new express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(5000);

const studentsList = ['Aya', 'Alaa', 'Esraa', 'Nouran', 'Hathout'];

const showList = (request, response) => {
    response.render('index', {layout: false, studentsList});
 /*   let output = '<ol>';
    for(let i=0; i<studentsList.length; i++){
        output += '<li>' + studentsList[i] + '</li>';
    }
    output += '</ol>';
    response.send(output); */
};

app.get('/students', showList);