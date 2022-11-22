const TaskServices=require('../services/tasks.services');

const getAlltask= async(req,res)=>{
try{
const tasks=await taskServices.getALL();
res.send(tasks);

}catch(error){
console.log(error);


}


}
const createTask=async (req,res)=>{
    try{
const newTask=req.body;
const task=await crearTarea(newTask);
res.json(task);
    }
    catch(error){

console.log(error)

    }



}
const updateTask=async (req,res)=>{
    try{
const {id}=req.params;
const updateTasks=res.body;
const result=await actualizarTarea(updateTasks,id);
res.json(result);
    }
    catch(error){

console.log(error)

    }

}
const deleteTask=async (req,res)=>{
try{
const {id}=req.params;
const result=await eliminarTask(id);
res.json(result);
}catch(error){
console.log(error);


}

}
module.exports={
getAlltask,
createTask,
updateTask,
deleteTask


}