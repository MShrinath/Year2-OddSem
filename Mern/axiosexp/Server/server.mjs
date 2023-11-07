import express, { json } from 'express';
import { connect, model } from 'mongoose';
import cors from 'cors';

const app = express();
const port = 2222;

app.use(cors());
app.use(json());

connect('mongodb+srv://userlol:iampoggo@maybe.bmaerje.mongodb.net/Task');

const Task = model('Task', {
    text: String,
});

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);

});

app.listen(port, () => {
    console.log("Server is running on port ${ port }");
});
