import './kintaroButton2.css';

const KintaroButton2 = ({
    children,
    width,
    color,
    borderColor = 'var(--kintaro-hover)',
    className = '',
    style = {},
    ...props
}) => {
    return (
        <button
            {...props}
            className={`kintaro-button-reset kintaro-button-2 ${className}`}
            style={{
                border: `1px solid ${borderColor}`,
                color,
                '--kintaro-custom-hover': borderColor,
                width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton2;