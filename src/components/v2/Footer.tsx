import { mdiDiscord, mdiGithub, mdiInformationOutline, mdiLink } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { Box, Flex, Link, Text } from 'theme-ui'
import NextLink from 'next/link'

interface FooterProps {
  variant?: 'page' | 'compact'
}

const pillStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 2,
  px: 3,
  py: 2,
  borderRadius: 'full',
  fontSize: 1,
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
  border: '1px solid rgba(128, 128, 128, 0.35)',
  transition: 'background-color 200ms ease, transform 200ms ease',
  '&:hover': { bg: 'rgba(128, 128, 128, 0.14)', transform: 'translateY(-1px)' },
  '&:focus-visible': {
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: 2,
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&:hover': { transform: 'none' },
  },
} as const

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  px: 2,
  py: '6px',
  borderRadius: 2,
  fontSize: 1,
  textDecoration: 'none',
  color: 'inherit',
  opacity: 0.75,
  transition: 'background-color 150ms ease, opacity 150ms ease',
  '&:hover': { opacity: 1, bg: 'rgba(128, 128, 128, 0.14)' },
  '&:focus-visible': {
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: 1,
  },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
} as const

const externalLinks = [
  { href: 'https://github.com/sakura-knoll/abyss-lab', label: 'GitHub', icon: mdiGithub },
  { href: 'https://discord.gg/UnrM9T9PRs', label: 'Discord (EN)', icon: mdiDiscord },
  { href: 'https://arca.live/b/cherryhill', label: 'arca.live (KR)', icon: mdiLink },
]

const disclaimer =
  'Dự án phi thương mại do người hâm mộ thực hiện, không liên kết với miHoYo/HoYoverse. Mọi hình ảnh và nhân vật thuộc về chủ sở hữu tương ứng.'

const Footer = ({ variant = 'page' }: FooterProps) => {
  const compact = variant === 'compact'
  const linkSx = compact ? rowStyle : pillStyle
  const iconSize = compact ? '16px' : '18px'

  const links = (
    <Flex
      as="nav"
      aria-label="Footer"
      sx={
        compact
          ? { flexDirection: 'column', gap: '2px' }
          : { flexWrap: 'wrap', gap: 2 }
      }
    >
      <NextLink href="/honkai3rd/about" passHref>
        <Link sx={linkSx}>
          <Icon path={mdiInformationOutline} size={iconSize} />
          About Original Abyss Lab
        </Link>
      </NextLink>
      {externalLinks.map(({ href, label, icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={linkSx}
        >
          <Icon path={icon} size={iconSize} />
          {label}
        </Link>
      ))}
    </Flex>
  )

  if (compact) {
    return (
      <Box as="footer">
        {links}
        <Text
          sx={{
            display: 'block',
            mt: 3,
            px: 2,
            fontSize: 0,
            lineHeight: 1.5,
            opacity: 0.5,
          }}
        >
          © {new Date().getFullYear()} Abyss Lab VN. {disclaimer}
        </Text>
      </Box>
    )
  }

  return (
    <Box as="footer" py={[4, 5]}>
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          justifyContent: 'space-between',
          alignItems: ['flex-start', 'center'],
          gap: 4,
        }}
      >
        <Box sx={{ maxWidth: 420 }}>
          <Text sx={{ display: 'block', fontWeight: 'bold', fontSize: 3 }}>
            Abyss Lab VN
          </Text>
          <Text sx={{ display: 'block', mt: 1, fontSize: 1, opacity: 0.7 }}>
            Bản Việt hóa visual novel Honkai Impact 3rd, dựa trên dự án mã nguồn
            mở Abyss Lab.
          </Text>
        </Box>
        {links}
      </Flex>
      <Text
        sx={{ display: 'block', mt: 4, fontSize: 0, opacity: 0.55, lineHeight: 1.6 }}
      >
        © {new Date().getFullYear()} Abyss Lab VN. {disclaimer}
      </Text>
    </Box>
  )
}

export default Footer