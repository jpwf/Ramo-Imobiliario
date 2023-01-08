import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComponent(props) {
    const [item, setItem] = React.useState('');
    const handleChange = (event) => {
        setItem(event.target.value);
    };

    return (
        <>
            <FormControl sx={{ minWidth: 140 }} size='small'>
                {props.label
                    ? <InputLabel className='text-sm' id="demo-simple-select-helper-label">{props.label}</InputLabel>
                    : ""
                }
                <Select
                    className='text-sm '
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label={props.label}
                    value={item}
                    onChange={handleChange}
                    autoWidth
                    displayEmpty
                    
                >
                    {props.defaultV
                        ? <MenuItem value="">{props.defaultV}</MenuItem>
                        : null
                    }
                    {props.districts ? props.districts.map((value, index) => (
                        <MenuItem key={index} value={value}>{value}</MenuItem>
                    )) : null
                    }
                    {props.bedrooms ? props.bedrooms.map((value, index) => (
                        <MenuItem key={index} value={value}>{value}</MenuItem>
                    )) : null
                    }
                </Select>
            </FormControl>
        </>
    );
}