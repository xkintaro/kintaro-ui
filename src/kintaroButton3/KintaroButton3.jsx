import './kintaroButton3.css';

const KintaroButton3 = ({
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
            className={`kintaro-button-reset kintaro-button-3 ${disabled ? 'kintaro-button-disabled' : ''} ${className}`}
            style={{
                width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton3;