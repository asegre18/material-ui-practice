import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6888, #FFBE53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const ButtonStyled = () => {
    const classes = useStyles();
    return (
        <div>
            <Button 
            className={classes.root}>
                Test Styled Button
                </Button>
        </div>
    )
}

export default ButtonStyled
