const express=require('express');
const sequelize=require('./sequelize');
const Todo=require('./models/Todo');
const app=express();
const port=3000;

//Test database connecction
sequelize.authenticate()
.then(()=>{
    console.log('Connection has been established successfully.');
    //Synchronize defined models with database
    return sequelize.sync({alter:true});
})
.then(()=>{
    console.log('All models were synchronized successfully.');
})
.catch((error)=>{
    console.log('Unable to connet to the database:',error);
});
app.use(express.json());

//Define endpoints
app.get('/todos',(req,res)=>{
    Todo.findAll()
    .then((todos)=>{
        res.json(todos);
    })
    .catch((error)=>{
        res.status(500).json({error:'Internal server error'});
    });
});

app.post('/todos',(req,res)=>{
    const{title,completed}=req.body;
    Todo.create({title,completed})
    .then((todo)=>{
        res.status(201).json(todo);
    })
    .catch((error)=>{
        res.status(400).json({error:'bad request'});
    });
});

//PUT
app.put('/todos/:id',(req,res)=>{
    const todoId=req.params.id;
    const{ title,completed }=req.body;

    Todo.findByPk(todoId)
    .then(todo=>{
        if(!todo){
            return res.status(404).json({error:'Todo not found'});
        }
         //update the todo
         todo.title=title;
         todo.completed=completed;

         //save updated todo
         return todo.save();
    })
    .then(updatedTodo=>{
        res.json(updatedTodo);
    })
    .cath(error=>{
        res.status(500).json({error:'Internal server error'});
    })
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});