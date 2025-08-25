import './kintaroButton1.css';

const KintaroButton1 = ({
    children,
    width,
    style = {},
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`kintaro-button-reset kintaro-button-1 ${disabled ? 'kintaro-button-disabled' : ''} ${className}`}
            style={{
                width: width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton1;