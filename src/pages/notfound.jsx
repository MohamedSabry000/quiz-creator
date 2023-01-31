import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import FlexCenter from '../components/flex/FlexCenter'
import NotFoundImg from '../assets/404-page-not-found.json'


function Notfound() {
    return (
        <FlexCenter className={"h-screen"}>
            <Player
            autoplay
            loop
            src={NotFoundImg}
            style={{ height: '300px', width: '300px' }}
            >
            </Player>
        </FlexCenter>
     )
}

export default Notfound