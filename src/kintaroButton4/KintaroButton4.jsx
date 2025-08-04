import './kintaroButton4.css';

const KintaroButton4 = ({
    children,
    style = {},
    disabled = false,
    ...props
}) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`kintaro-button-reset kintaro-button-4 ${disabled ? 'kintaro-button-disabled' : ''}`}
            style={{
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton4;