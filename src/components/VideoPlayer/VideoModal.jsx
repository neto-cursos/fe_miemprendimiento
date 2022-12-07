import React from 'react'

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
const VideoModal = ({videoDatos}) => {
    const [windowSize, setWindowSize] = React.useState(getWindowSize());
    React.useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div className="flex justify-center text-center p-5 rounded-lg shadow bg-white" style={{ boxShadow: "0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)" }}>
            <div className="svg-box">
                <iframe
                    id="video"
                    width={windowSize.innerWidth > 640 ? "640" : "230"}
                    height={windowSize.innerWidth > 640 ? "480" : "154"}
                    src={"https://www.youtube.com/embed/" + videoDatos.suge_link}
                    frameBorder="0"
                    allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="pl-2"
                />

            </div>
        </div>
    )
}

export default VideoModal