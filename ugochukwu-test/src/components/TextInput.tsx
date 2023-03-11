interface Props {
    onChangeAction: () => void,
    placeholder: string;
}
export default function TextInput(props: Props) {
    const { onChangeAction, placeholder } = props;
    return (
        <input className="border-2 rounded-md outline-none" placeholder={placeholder} onChange={onChangeAction} />
    )
}