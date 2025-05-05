import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

export function RedPanda() {
  const tailRef = useRef(null)

  useEffect(() => {
    gsap.to(tailRef.current, {
      rotation: 20, // Wags the tail
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: 'power1.inOut',
    })
  }, [])

  // Colors as variables
  const color = {
    furColor: '#ff6600',
    eyePatchColor: 'black',
    eyeWhite: 'white',
    noseColor: 'black',
    mouthColor: 'rgb(15, 15, 15)',
    pawColor: 'rgb(15, 15, 15)',
  }

  // Sizes as variables
  const baseSize = 100
  const headSize = baseSize * 0.4
  const bodyWidth = baseSize * 0.65
  const bodyHeight = baseSize * 0.75
  const tailWidth = baseSize * 0.35
  const tailHeight = baseSize * 0.18
  const earSize = headSize * 0.5
  const eyeSize = headSize * 0.15
  const noseWidth = headSize * 0.2
  const noseHeight = headSize * 0.125
  const handWidth = baseSize * 0.25
  const handHeight = baseSize * 0.35
  const legWidth = baseSize * 0.22
  const legHeight = baseSize * 0.18
  const cyEye = '75'

  return (
    <ContainerStyled>
      <SvgStyled viewBox="0 0 200 225">
        {/* Tail */}
        <ellipse
          ref={tailRef}
          cx="40"
          cy="150"
          rx={tailWidth}
          ry={tailHeight}
          fill={color.furColor}
          stroke={color.pawColor}
          strokeWidth="3"
          transform="rotate(-20, 40, 150)"
        />

        {/* Body */}
        <ellipse
          cx="100"
          cy="140"
          rx={bodyWidth}
          ry={bodyHeight}
          fill={color.furColor}
          stroke={color.pawColor}
          strokeWidth="4"
        />

        {/* Head */}
        <circle
          cx="100"
          cy="80"
          r={headSize}
          fill={color.furColor}
          stroke="black"
          strokeWidth="4"
        />

        {/* Eye patches */}
        <ellipse
          cx="80"
          cy={cyEye}
          rx={eyeSize}
          ry={eyeSize * 1.33}
          fill={color.eyePatchColor}
          opacity="0.6"
        />
        <ellipse
          cx="120"
          cy={cyEye}
          rx={eyeSize}
          ry={eyeSize * 1.33}
          fill={color.eyePatchColor}
          opacity="0.6"
        />

        {/* Eyes */}
        <circle cx="80" cy={cyEye} r={eyeSize * 0.4} fill={color.eyeWhite} />
        <circle cx="120" cy={cyEye} r={eyeSize * 0.4} fill={color.eyeWhite} />
        <circle
          cx="80"
          cy={cyEye}
          r={eyeSize * 0.2}
          fill={color.eyePatchColor}
        />
        <circle
          cx="120"
          cy={cyEye}
          r={eyeSize * 0.2}
          fill={color.eyePatchColor}
        />

        {/* Nose */}
        <ellipse
          cx="100"
          cy="95"
          rx={noseWidth}
          ry={noseHeight}
          fill={color.noseColor}
        />

        {/* Mouth */}
        <path
          d="M 90 105 Q 100 115, 110 105"
          stroke={color.mouthColor}
          strokeWidth="2"
          fill="none"
        />

        {/* Ears */}
        <circle
          cx="70"
          cy="50"
          r={earSize}
          fill={color.furColor}
          stroke="black"
          strokeWidth="3"
        />
        <circle
          cx="130"
          cy="50"
          r={earSize}
          fill={color.furColor}
          stroke="black"
          strokeWidth="3"
        />

        {/* Hands */}
        <ellipse
          cx="50"
          cy="130"
          rx={handWidth}
          ry={handHeight}
          fill={color.pawColor}
        />
        <ellipse
          cx="150"
          cy="130"
          rx={handWidth}
          ry={handHeight}
          fill={color.pawColor}
        />

        {/* Legs */}
        <ellipse
          cx="80"
          cy="180"
          rx={legWidth}
          ry={legHeight}
          fill={color.pawColor}
        />
        <ellipse
          cx="120"
          cy="180"
          rx={legWidth}
          ry={legHeight}
          fill={color.pawColor}
        />
      </SvgStyled>
    </ContainerStyled>
  )
}
// Styled component for the container
const ContainerStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(0, 140, 255, 0.25);
  border-radius: 12px;
`

// Styled component for the SVG
const SvgStyled = styled.svg`
  width: 400px;
  height: 400px;
  position: relative;
`
