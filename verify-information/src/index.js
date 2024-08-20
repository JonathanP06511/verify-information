const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const setupSwagger = require('./swagger/swagger');

const app = express();
app.set('port', 4001);


app.use(cors({
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/apiverify', require('./Verify/apiverify'));

setupSwagger(app);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
