import type { IconInfoItemType } from '@/types/IconInfoItemType'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export const INFORMATION_LINK: IconInfoItemType[] = [
  {
    href: 'https://github.com/EyalShapiro',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/eyalshapiro',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/eyalshapiro24',
    icon: <FaInstagram />,
    label: 'Instagram',
  },
]
