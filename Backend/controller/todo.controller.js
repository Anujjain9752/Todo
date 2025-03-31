import Todo from '../model/todo.model.js';

export const createTodo = async(req,res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    user: req.user._id,     // associate todo with logged-in user

  })


  try {
    const newTodo =await todo.save();
    res.status(201).json({message: "Todo created Successfully", newTodo});

  }catch (error) {
    console.log(error);
    res.status(400).json({message: "Error occuring in todo creation."});
  }
}


export const getTodos = async(req,res) => {
  try {
    const todos = await Todo.find({user: req.user._id});   //fetch todos for the logged-in user
    res.status(200).json({message: "Todos fetched successfully", todos});
  } catch (error) {
    console.log(error);
    res.status(400).json({message: "Error occuring in fetching todos."});
  }
}

export const updateTodo = async(req,res) => { 

 try {

  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json({message: "Todo updated successfully", todo});
 } catch (error) {
  console.log(error);
  res.status(400).json({message: "Error occuring in updating todos."});
 }


}


export const deleteTodo = async(req,res) => { 

try {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if(!todo){
    return res.status(404).json({message: "Todo not found"});
  }
  res.status(200).json({message: "Todo deleted successfully"}); 



} catch (error) {
  console.log(error);
  res.status(400).json({message: "Error occuring in deleting todos."});
}




}