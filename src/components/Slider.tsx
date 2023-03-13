import Slider from '@mui/material/Slider';

interface Props {
    onChangeAction: (text: number) => void,
    label: string;
    extraClasses?: string;
    value?: number;
}
export default function SliderComp(props: Props) {
    const { onChangeAction, label, extraClasses, value } = props;

    const handleInputChange = (event: any) => {
        onChangeAction(event.target.value);
    };

    return (
        <div className={`flex flex-col ${extraClasses}`}>
            <small>{label}</small>
            <Slider value={value} sx={{ width: '100%', height: '10%' }} onChange={handleInputChange} />
        </div>
    )
}