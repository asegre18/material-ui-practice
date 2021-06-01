import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = () => {
    return (
        <div>
            <TextField
            variant="filled"
            color="secondary"
            type="date"
            // type="time"
            // type="email"
            label="The Date"
            placeholder="test@test.com"
            />
        </div>
    )
}

export default TextInput
