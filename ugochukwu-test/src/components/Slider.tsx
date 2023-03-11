import Slider from '@mui/material/Slider';

interface Props {
    onChangeAction: () => void,
    label: string;
    extraClasses?: string;
}
export default function SliderComp(props: Props) {
    const { onChangeAction, label, extraClasses } = props;
    return (
        <div className={`flex flex-col ${extraClasses}`}>
            <small>{label}</small>
            <Slider sx={{ width: '100%', height: '10%' }} onChange={onChangeAction} />
        </div>
    )
}