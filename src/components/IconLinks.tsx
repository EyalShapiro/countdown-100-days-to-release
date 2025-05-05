import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { INFORMATION_LINK } from '@/constants/information'

export const IconLinks: React.FC = () => {
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (iconsRef.current) {
      gsap.fromTo(
        iconsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }
  }, [])

  return (
    <>
      <IconsWrapper ref={iconsRef}>
        {INFORMATION_LINK.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            data-tip={item.label}
            data-tooltip-id="icon-tooltip"
          >
            {item.icon}
          </a>
        ))}
        <ReactTooltip
          style={{ fontSize: '1.2rem' }}
          isOpen={true}
          id="icon-tooltip"
          place="bottom"
          variant="dark"
          delayShow={10}
          delayHide={10}
        />
      </IconsWrapper>
    </>
  )
}

const IconsWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;

  a {
    color: white;
    transition: transform 0.25s;
    &:hover {
      transform: scale(1.25) !important;
    }
  }
`
