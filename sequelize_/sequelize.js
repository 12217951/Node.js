const{ Sequelize } =require('sequelize');
 //initialize sequelize with postgres database
 const sequelize=new Sequelize('todos','postgres','root',{
    host:'localhost',
    dialect:'postgres',  //specify dialect for postgres
 });
 module.exports =sequelize;
   