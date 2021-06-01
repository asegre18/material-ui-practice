import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from '@material-ui/icons/Delete';


const HelloButton = () => {
    return (
        <>
            <ButtonGroup variant="contained" size="large">
            <Button 
        startIcon={<SaveIcon/>}
        color="primary"
        >
          Save
        </Button>
            <Button 
        // onClick={()=>alert("hello")} 
        startIcon={<DeleteIcon/>}
        // endIcon={<SaveIcon/>}
        color="secondary"
        // style={{fontSize: 25}}
        >
          Discard
        </Button>
        </ButtonGroup>
        </>
    )
}

export default HelloButton

