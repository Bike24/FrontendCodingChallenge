interface Props {
    onClickAction: () => void,
    label: string;
    type: 'primary' | 'default';
    extraClasses?: string;
}
export default function ButtonComp(props: Props) {
    const { onClickAction, label, type, extraClasses } = props;
    const color = `${type === 'primary' ? 'bg-blue-400' : 'bg-gray-600'}`
    return (
        <button className={`${color} p-4 rounded-md text-white font-bold ${extraClasses}`} onClick={onClickAction}>{label}</button>
    )
}