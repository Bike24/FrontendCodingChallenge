interface Props {
    completed?: number;
}

const CompletionBar = (props: Props) => {
    const { completed } = props;

    const containerStyles = {
        height: 25,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 5
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={{
                height: '100%',
                width: `${completed}%`,
                backgroundColor: completed === 100 ? 'green' : 'blue',
                borderRadius: 'inherit',
                textAlign: 'right'
            }}>
                <span style={labelStyles}></span>
            </div>
        </div>
    );
};

export default CompletionBar;