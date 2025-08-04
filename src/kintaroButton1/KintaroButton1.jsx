import './kintaroButton1.css';

const KintaroButton1 = ({
    children,
    width,
    color,
    bgColor,
    hoverColor = 'var(--kintaro-hover)',
    className = '',
    style = {},
    ...props
}) => {
    return (
        <button
            {...props}
            className={`kintaro-button-reset kintaro-button-1 ${className}`}
            style={{
                background: bgColor,
                color: color,
                '--kintaro-custom-hover': hoverColor,
                width: width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton1;