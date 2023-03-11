interface Props {
    onClickAction: () => void,
    label: string;
    type: 'primary' | 'default'
}
export default function ButtonComp(props: Props) {
    const { onClickAction, label, type } = props;
    const color = `${type === 'primary' ? 'bg-blue-400' : 'bg-gray-600'}`
    return (
        <button className={`${color} p-4 rounded-md text-white font-bold`} onClick={onClickAction}>{label}</button>
    )
}