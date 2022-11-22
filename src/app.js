const  express=require('express');
const app=express();
app.use(express.json());
const tasksRoutes=require('./routes/task.routes');
app.use('api/v1/tasks',tasksRoutes);
module.exports=app;