import './kintaroTitle3.css'

const KintaroTitle3 = ({
    children,
    color,
    width,
    textAlign = 'left',
    textAlignMobile
}) => {

    return (
        <h1
            className="kintaro-title-reset kintaro-title-3"
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

export default KintaroTitle3;