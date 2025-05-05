import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { GSDevTools } from 'gsap/GSDevTools'

gsap.registerPlugin(GSDevTools)
const Panda = () => {
  const tailRef = useRef(null)

  useEffect(() => {
    gsap.to(tailRef.current, {
      rotation: 20, // מנפנף בזנב
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: 'power1.inOut',
    })
  }, [])

  // צבעים כמשתנים
  const color = {
    furColor: 'saddlebrown',
    eyePatchColor: 'black',
    eyeWhite: 'white',
    noseColor: 'black',
    mouthColor: 'black',
    pawColor: 'black',
  }

  // גדלים כמשתנים
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
    <div className={`flex justify-center items-center h-screen bg-green-200`}>
      <svg viewBox="0 0 200 225" width="400" height="400" className="relative">
        {/* זנב */}
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

        {/* גוף */}
        <ellipse
          cx="100"
          cy="140"
          rx={bodyWidth}
          ry={bodyHeight}
          fill={color.furColor}
          stroke={color.pawColor}
          strokeWidth="4"
        />

        {/* ראש */}
        <circle
          cx="100"
          cy="80"
          r={headSize}
          fill={color.furColor}
          stroke="black"
          strokeWidth="4"
        />

        {/* כתמים שחורים סביב העיניים */}
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

        {/* עיניים */}
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

        {/* אף */}
        <ellipse
          cx="100"
          cy="95"
          rx={noseWidth}
          ry={noseHeight}
          fill={color.noseColor}
        />

        {/* פה */}
        <path
          d="M 90 105 Q 100 115, 110 105"
          stroke={color.mouthColor}
          strokeWidth="2"
          fill="none"
        />

        {/* אוזניים */}
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

        {/* ידיים */}
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

        {/* רגליים */}
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
      </svg>
    </div>
  )
}

export { Panda }
