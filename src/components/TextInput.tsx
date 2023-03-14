interface Props {
    onChangeAction: (num: number) => void,
    placeholder?: string;
    extraClasses?: string;
    inputType: 'number' | 'text',
    value?: string
}
export default function TextInput(props: Props) {
    const { onChangeAction, placeholder, extraClasses, inputType, value } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeAction(parseInt(event.target.value));
    }

    return (
        <input value={value} min={0} type={inputType === 'number' ? "number" : "text"} className={`border-2 rounded-md outline-none w-20 ${extraClasses}`} placeholder={placeholder} onChange={handleChange} />
    )
}