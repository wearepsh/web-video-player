import React from "react";
import styled from 'styled-components'
import ReactPlayer from 'react-player'


const VideoContainer = styled.div`
  height: 0;
	overflow: hidden;
	padding-bottom: 56.25%;
	position: relative;
  
  iframe, object, embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
	}
`

export const ResponsiveVideo = (props: IProps) => {
  console.log(props,"props")
  return(
    <VideoContainer>
      <ReactPlayer
        url = {props.url}
        controls = {props.controls}
        loop = {props.loop}
      />
    </VideoContainer>
  )

}

interface IProps {
  url:string;
  controls: boolean,
  loop:boolean,
}