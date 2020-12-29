import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function Form ({todos, status, setTodos, setInputText, inputText, setStatus}){
    
    const handleChange = (event) => {
        console.log(event.target.value);
        setStatus(event.target.value);
    };

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        console.log('final input ->'+ inputText)
        setTodos([
            ...todos,{text: inputText, completed : false, id : Math.random() * 10000 }
        ]);
        setInputText("");
        
    }

    return (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><input value = {inputText} onChange = {inputTextHandler}  type="text"></input></td>
                            <td>
                                <Fab
                                style = {{
                                    color :  'white',
                                    backgroundColor : ' #ee0d0d',

                                }}
                                type = "submit"
                                disabled = {!inputText}
                                onClick = {submitTodoHandler}
                                >
                                    <AddIcon />
                                </Fab>
                            </td>
                            <td>
                                <div className="dropdown">
                                    <FormControl className="dropdown" variant="outlined">
                                        <InputLabel id="demo-simple-select-outlined-label"> Status </InputLabel>
                                        <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={status}
                                        onChange={handleChange}
                                        label="Status"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="all">All</MenuItem>
                                        <MenuItem value="completed">Completed</MenuItem>
                                        <MenuItem value="notcompleted">Not Completed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}