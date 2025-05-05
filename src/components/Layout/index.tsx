import React, { type ReactNode } from 'react'
import styled from 'styled-components'

const BlurredBox = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  max-width: 90%;
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <BlurredBox>{children}</BlurredBox>
)
