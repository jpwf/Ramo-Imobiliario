import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Component to create a MaterialUI select component with the values passed as props
export default function SelectComponent(props) {
    const bedroomsValues = [1, 2, 3, 4, 5];
    const districtNames = ["Grajaú", "Méier", "Tijuca", "Sepetiba", "Copacabana", "Urca", "Leme", "Coelho Neto", "Flamengo"];
    bedroomsValues.sort();
    districtNames.sort();
    
    return (
        <>
            {/* // MaterialUI select component */}
            <FormControl sx={{ minWidth: 140 }} size='small'>
                {props.label
                    ? <InputLabel className='text-sm' id={`${props.label}-select-label`}>{props.label}</InputLabel>
                    : ""
                }
                <Select
                    className='text-sm '
                    labelId={`${props.label}-select-label`}
                    id={`${props.label}-select`}
                    label={props.label}
                    value={props.selectedValue || ''}
                    onChange={props.onChange}
                    autoWidth
                    name={props.name}
                    displayEmpty
                    
                >   
                    {/* //if there is a defaultV passed as props, it will be shown as the options */}
                    {props.defaultV ? 
                        <MenuItem disabled value=''><em>{props.defaultV}</em></MenuItem>
                     : null
                    }
                    {/* if there is a value passed as props, it will be shown as the options */}
                    {props.values ? props.values.map((value, index) => (
                        <MenuItem key={index} value={value}>{value}</MenuItem>
                    )) : null
                    }
                    {props.districts ? districtNames.map((value, index) => (
                        <MenuItem key={index} value={value}>{value}</MenuItem>
                    )) : null
                    }
                    {props.bedrooms ? bedroomsValues.map((value, index) => (
                        <MenuItem key={index} value={value}>{value}</MenuItem>
                    )) : null
                    }
                </Select>
            </FormControl>
        </>
    );
}