// here we will write the schema sabse phle , ki hume kya data store krna hai
// then we will write the model, jisme schema ko pass krke model bnayenge

import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
   text: {
    type: String,
    required: true
   },
   completed:{
    type: Boolean,
    required: true
   },
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',   // Reference to the User model to connect to users collections in MongoDB
      required: true
   }
})


const Todo = mongoose.model('Todo', todoSchema);
export default Todo // exporting the model to use it in other files
