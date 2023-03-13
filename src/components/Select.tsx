import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface OptionsProps {
    value: string;
    label: string;
    price: number;
}

interface Props {
    options: Array<OptionsProps>,
    label?: string,
    onSelectAction: (product: string) => void;
    containerClass?: string;
}

export default function SelectComp(props: Props) {
    const { options, label, onSelectAction, containerClass } = props;
    const [personName, setPersonName] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        const obj = options.filter((option)=> option.label === value)[0];
        onSelectAction(`${obj.value}`);
        setPersonName(obj.label)
    };

    return (
        <div className={`lg:w-96 xs:w-56 ${containerClass}`}>
            <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
                <Select
                    value={personName}
                    sx={{ width: "100%" }}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select product" />}
                    renderValue={(selected) => selected}
                    MenuProps={MenuProps}
                >
                    {options.map(({ value, label, price }) => (
                        <MenuItem key={value} value={label}>
                            <div className='flex flex-col'>
                                <ListItemText primary={label} />
                                <small className='mt-2'>${price}</small>
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}