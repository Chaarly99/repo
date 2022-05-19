import { ParallaxBanner } from 'react-scroll-parallax';


const img1 = (props) => {
    let contentStyle = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#fffff',
        backgroundColor: 'rgba(0,0,0,.4)',
        WebKitFilter: 'blur(0px) saturate(2)'
    }
    return (
    <ParallaxBanner layers={[{image: props.imgsrc , amount:0.6}]} style={{height: props.height}}>
        <div style={contentStyle}>
            {props.children}
        </div>
    </ParallaxBanner>
    )
};

export default img1