interface Props {
    onChangeAction: (num: string) => void,
    placeholder?: string;
    extraClasses?: string;
    inputType: 'number' | 'text',
    value?: string
}
export default function TextInput(props: Props) {
    const { onChangeAction, placeholder, extraClasses, inputType, value } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeAction(event.target.value);
    }

    return (
        <input value={value} type={inputType === 'number' ? "number" : "text"} className={`border-2 rounded-md outline-none ${extraClasses}`} placeholder={placeholder} onChange={handleChange} />
    )
}