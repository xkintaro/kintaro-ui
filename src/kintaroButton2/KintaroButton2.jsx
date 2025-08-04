import './kintaroButton2.css';

const KintaroButton2 = ({
    children,
    width,
    style = {},
    disabled = false,
    ...props
}) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`kintaro-button-reset kintaro-button-2 ${disabled ? 'kintaro-button-disabled' : ''}`}
            style={{
                width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton2;