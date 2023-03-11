import Slider from '@mui/material/Slider';

interface Props {
    onChangeAction: () => void,
    label: string;
}
export default function SliderComp(props: Props) {
    const { onChangeAction, label } = props;
    return (
        <div>
            <small>{label}</small>
            <Slider onChange={onChangeAction} />
        </div>
    )
}