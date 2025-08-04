import './kintaroButton3.css';

const KintaroButton3 = ({
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
            className={`kintaro-button-reset kintaro-button-3 ${className}`}
            style={{
                background: bgColor,
                color,
                '--kintaro-custom-hover': hoverColor,
                width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton3;