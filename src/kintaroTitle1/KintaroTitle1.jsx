import './kintaroTitle1.css'

const KintaroTitle1 = ({
    children,
    color,
    width,
    textAlign = 'left',
    textAlignMobile
}) => {

    return (
        <h1
            className="kintaro-title-reset kintaro-title-1"
            style={{
                color: color,
                maxWidth: width,
                '--custom-text-align': textAlign,
                '--custom-text-align-mobile': textAlignMobile || textAlign
            }}>
            {children}
        </h1>
    );
};

export default KintaroTitle1;