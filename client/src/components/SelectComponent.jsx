import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComponent({ label, value, defaultV }) {
    const [item, setItem] = React.useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ minWidth: 140 }} size='small'>
                {label
                    ? <InputLabel className='text-sm' id="demo-simple-select-helper-label">{label}</InputLabel>
                    : ""
                }
                <Select
                    className='text-sm '
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label={label}
                    value={item}
                    onChange={handleChange}
                    autoWidth
                    displayEmpty
                    
                >
                    {defaultV
                        ? <MenuItem value=""> <em>{defaultV}</em> </MenuItem>
                        : ''
                    }
                    <MenuItem value={value}>{value}</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}