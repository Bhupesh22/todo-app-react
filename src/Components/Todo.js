import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Card from '@material-ui/core/Card';

const Todo = ({text, todo, todos, setTodos}) => {

  //Events
  const deleteHandler = () =>{
    setTodos(todos.filter((ele) => ele.id !== todo.id))
  }

  const setCompleteHandler = () => {
    setTodos(todos.map((ele) => {
      if(ele.id === todo.id){
        return {...ele, completed : !ele.completed};
      }
      return ele;
    }));
  }
  return (
      <div className="todo">
        <Card style={{borderRadius:"20px", paddingBottom:"5px", alignItems : "center"}}>
          <p className="text">
            <li className= {`todo-item ${todo.completed ? "completed" : ''}`}
            style={{float:'left', paddingTop:'20px', paddingLeft:'20px'}}> { text }
            </li>
            </p>
          <p className="buttons" style={{float:'right'}}>
            <Fab className="fab " style={{ color: "white" , backgroundColor : "red", height : "45px", width : "45px"}} onClick = {deleteHandler}>
                  <DeleteIcon style = {{height:"25px", width:"25px"}} />
            </Fab> &nbsp; &nbsp;
          </p> 
          
          <p className="buttons" style={{float:'right'}} >
            <Fab className="fab " style={{ color: "white", backgroundColor : "green", height :  "45px", width : "45px"}} onClick = {setCompleteHandler} >
                  <CheckCircle style = {{height:"25px", width:"25px"}}/>
            </Fab> &nbsp; &nbsp;
          </p>
        </Card>
        <br></br>
      </div>
  );
}

export default Todo;