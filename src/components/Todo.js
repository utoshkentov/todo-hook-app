import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Add, Delete, Edit} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import {v4 as uuidv4} from 'uuid'



const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: '#FFBD4522'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    typography: {
        marginBottom: 12,
        color: 'white'
    },
    form: {
        '& MuiCardActions-root MuiCardActions-spacing': {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    input: {
        justifyContent: 'center',
        textAlign: 'center',
        "& label.Mui-focused": {
            color: 'red'
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white'
            },
            '&:hover fieldset': {
                borderColor: 'white'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white'
            }
        }
    }
});

export const Todo = () => {
    const uuid = uuidv4();
    const [todo, setTodo] = useState('')
    const [items, setItems] = useState([])
    const classes = useStyles();

    const submitHandler = (e) => {
        e.preventDefault();
        setItems([...items, todo])
        console.log(todo)
        console.log(items)
        setTodo('')
    }

    const DeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }


    return (
        <>
        <Grid item xs={4} style={{transform: 'translate(100%, 30%)'}}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h2" component="h2" className={classes.typography}>
                        Todo List!
                    </Typography>
                    <Typography className={classes.typography} color="textSecondary" variant='body2'
                                inputProps={{style: {color: 'white'}}}>
                        Hello for everyone here you can use your own to do list
                    </Typography>
                    <Divider className={classes.typography}/>
                    {items.map(item => {
                        return (
                            <>
                                <Typography variant="body2" component="p" key={item.uuid}>
                                    {item}
                                    <IconButton>
                                        <Edit style={{color: 'white'}}/>
                                    </IconButton>
                                    <IconButton onClick={DeleteItem}>
                                        <Delete style={{color: 'white'}}/>
                                    </IconButton>
                                </Typography>
                            </>
                        )
                    })}
                <TextField
                    className={classes.input}
                    id="outlined-basic"
                    label="todos"
                    variant="outlined"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    required
                    inputProps={{style: {color: 'white'}}}
                    fullWidth
                />
                <CardActions>
                    <Button
                        size='large'
                        justify='center'
                        style={{marginTop: '10px', color: 'white'}}
                        startIcon={<Add/>}
                        type='submit'
                        variant='outlined'
                        onClick={submitHandler}
                    >
                        Add todo
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
        </Grid>
</>

)
}