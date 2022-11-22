const express=require('express');
const {getAlltask,
    createTask,
    updateTask,
    deleteTask}=require('../controllers/tasks.controllers');
const router=express.Router();
router.get('/tasks',getAlltask);
router.post('/tasks',createTask);
router.put('/tasks',updateTask);
router.delete('/tasks',deleteTask
);
module.exports=router;