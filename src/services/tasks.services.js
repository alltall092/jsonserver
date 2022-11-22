const path=require('path');
const fs=require('fs/promises');
const jsonPath=path.resolve('../data.json');
const getIdLast=(arreglo)=>{
const index=arreglo.length-1;
return arreglo[index].id+1;


}
class  TaskServices{
static async getAll(){
try{
const jsonFile=await fs.readFile(jsonPath,'utf8');
return jsonFile;
}catch(error){
throw(error);
}

}
static async create(newTask){
try{
    const jsonFile=await fs.readFile(jsonPath,'utf8');
    const task=JSON.parse(jsonFile);
task.push({...newTask,id:getIdIast(task)});
await fs.WriteFile(jsonPath,JSON.stringify(task));
return [];
}catch(error){

   throw(error) 
}

}
static async update(updateTask,id){
    try{
    const jsonFile=await fs.readFile(jsonPath,'utf8');
    const {status}=updateTask;
const taskArray=JSON.parse(jsonFile);
const index=taskArry.findIndex(x=>x/id==id);
taskArray[index].status=status;
await fs.WriteFile(jsonPath,JSON.stringify(taskArray));
return [];
    }catch(error){
console.log(error);
    }
}
 static async delete(id){

    const jsonFile=await fs.readFile(jsonPath,'utf8');
    
const taskArray=JSON.parse(jsonFile);
const index=taskArray.findIndex(x=>x.id===id);
taskArray.splice(index,1);
await fs.WriteFile(jsonPath,JSON.stringify(taskArray));
return [];
 }

}

module.exports=taskServices;