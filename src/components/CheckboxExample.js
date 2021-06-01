import React, {useState} from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'

const CheckboxExample = () => {
    const [checked, setChecked] = useState(true);
    return (
        <FormControlLabel
            control={<Checkbox
            checked={checked}
            icon={<DeleteIcon/>}
            checkedIcon={<SaveIcon/>}
            onChange={(e) =>setChecked(e.target.checked)}
            // color="primary"
            inputProps={{
                'aria-label': 'secondary checkbox'
            }}
            />}
            label="Testing Checkbox"
            />
    )
}

export default CheckboxExample