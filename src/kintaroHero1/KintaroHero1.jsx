import './kintaroHero1.css';

const KintaroHero1 = ({
    children,
    height,
    bgImage = null
}) => {
    return (
        <>
            <div className="kintaro-hero"
                style={{ height: height }}>
                <div className="hero-main">
                    {children}
                </div>
                {bgImage && (
                    <img src={Hero} alt={Hero} className="hero-bg" />
                )}
                {bgImage && (
                    <div className="hero-overlay"></div>
                )}
            </div>
        </>

    );
};

export default KintaroHero1;