import './kintaroTitle3.css'

const KintaroTitle3 = ({
    children,
    color,
    width,
    textAlign = 'left',
    textAlignMobile,
    className = '',
}) => {

    return (
        <h3
            className={`kintaro-title-reset kintaro-title-3 ${className}`}
            style={{
                color: color,
                maxWidth: width,
                '--custom-text-align': textAlign,
                '--custom-text-align-mobile': textAlignMobile || textAlign
            }}>
            {children}
        </h3>
    );
};

export default KintaroTitle3;