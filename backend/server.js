import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import Issue from './models/issue.js';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/issues');
const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('MongoDB connection database its connection established succesfully!');
})

router.route('/issues').get((req,res)=>{
    Issue.find((err, issues) =>{
        if(err)
            console.log(err)
        else
            res.json(issues);
    });
});

router.route('/issues/:id').get((req, res) =>{
    Issue.findById(req.params.id, (err, issues) => {
        if (err)
            console.log(err)
        else
            res.json(issues);
    }) 
})

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
    .then(issue => {
        res.status(200).json({'issue': 'Add succesfully'});
    })
    .catch( err => {
        res.status(400).send('Failed to create new ');
    });
});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issues) => {
        if(!issues)
            return next (new Error('error not found'));
        else
            issues.title = req.body.title;
            issues.responsible = req.body.responsible;
            issues.description = req.body.description;
            issues.severity = req.body.severity;
            issues.status = req.body.status;
            issues.save().then( issues =>{
                res.json('Update done!')
            }).catch(err => {
                res.status(400).send('update failed!');
            })
    })
})

router.route('issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id : req.params.id}, (err, issues) => {
        if(err)
            res.json(err)
        else
            res.json('remove id succesfully!')
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Hello there, I m express and run on port 4000'));