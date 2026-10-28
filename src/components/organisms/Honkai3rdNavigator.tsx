/** @jsxImportSource theme-ui */
import { mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import { Box, Flex, IconButton, NavLink, Switch, Text } from '@theme-ui/components'
import NextLink from 'next/link'
import { useColorMode } from 'theme-ui'
import { useTranslation } from '../../lib/i18n'
import NavItem from '../atoms/NavItem'
import Footer from '../v2/Footer'

interface Honkai3rdNavigatorProps {
  close?: () => void
}

const Honkai3rdNavigator = ({ close }: Honkai3rdNavigatorProps) => {
  const { t } = useTranslation()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100%',
        p: 3,
      }}
    >
      {close != null && (
        <Flex sx={{ display: ['flex', 'none'], justifyContent: 'flex-end', mb: 2 }}>
          <IconButton
            aria-label="Close menu"
            sx={{ width: 40, height: 40 }}
            onClick={close}
          >
            <Icon path={mdiClose} size={1} />
          </IconButton>
        </Flex>
      )}

      {/* Brand */}
      <NextLink href="/" passHref>
        <NavLink
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            p: 0,
            mb: 3,
            fontSize: 3,
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Abyss Lab
          <Box
            as="span"
            sx={{
              px: 2,
              py: '2px',
              borderRadius: 'full',
              fontSize: 0,
              letterSpacing: '0.1em',
              color: 'white',
              bg: 'primary',
            }}
          >
            VN
          </Box>
        </NavLink>
      </NextLink>

      {/* Section */}
      <NextLink href="/honkai3rd" passHref>
        <NavLink
          sx={{
            display: 'block',
            p: 0,
            mb: 2,
            fontSize: 0,
            fontWeight: 'bold',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'inherit',
            opacity: 0.6,
            '&:hover': { opacity: 1 },
          }}
        >
          {t('common.honkai-3rd')}
        </NavLink>
      </NextLink>

      <Box sx={{ mb: 4 }}>
        <NavItem target="about" />
      </Box>

      <Box sx={{ mb: 4 }}>
        <NavItem target="media" />
      </Box>

      {/* Bottom area, pushed down when the sidebar is taller than its content */}
      <Box
        sx={{
          mt: 'auto',
          pt: 3,
          borderTop: '1px solid rgba(128, 128, 128, 0.25)',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            mb: 3,
          }}
        >
          <Text sx={{ fontSize: 1, opacity: 0.75 }}>
            {isDark ? '🌙 Dark' : '☀️ Light'}
          </Text>
          <Switch
            aria-label="Toggle dark mode"
            checked={isDark}
            onChange={event =>
              setColorMode(event.target.checked ? 'dark' : 'default')
            }
            sx={{
              width: 44,
              m: 0,
              'input ~ &': { backgroundColor: 'muted' },
              'input:checked ~ &': { backgroundColor: 'primary' },
            }}
          />
        </Flex>

        <Footer variant="compact" />
      </Box>
    </Flex>
  )
}

export default Honkai3rdNavigator