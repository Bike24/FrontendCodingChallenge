interface Props {
    onChangeAction: () => void,
    placeholder?: string;
    extraClasses?: string;
}
export default function TextInput(props: Props) {
    const { onChangeAction, placeholder, extraClasses } = props;
    return (
        <input className={`border-2 rounded-md outline-none ${extraClasses}`} placeholder={placeholder} onChange={onChangeAction} />
    )
}