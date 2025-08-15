import './kintaroHero1.css';

const KintaroHero1 = ({
    children,
    height,
    backgroundImage = null
}) => {
    return (
        <div className='kintaro-hero'
            style={{ height: height }}
        >
            <div className="kintaro-hero-main">
                {children}
            </div>
            <div className="bubbles">
                {[...Array(20)].map((_, i) => {
                    const size = 5 + Math.random() * 15;
                    return (
                        <div
                            key={i}
                            className="bubble"
                            style={{
                                '--random-x': Math.random(),
                                left: `${Math.random() * 100}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                                animationDuration: `${8 + Math.random() * 12}s`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    )
                })}
            </div>

            {backgroundImage && (
                <>
                    <div className="kintaro-hero-overlay"></div>
                    <img src={backgroundImage} className="kintaro-hero-bg-image" />
                </>
            )}

        </div>
    );
};

export default KintaroHero1;