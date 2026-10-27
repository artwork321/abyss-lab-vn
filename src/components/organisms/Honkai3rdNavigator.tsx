/** @jsxImportSource theme-ui */
import { mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import { NavLink, Heading, Box, Flex, IconButton, Switch, Label } from '@theme-ui/components'
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
  return (
    <Box
      sx={{
        p: 2
      }}
    >
      {close != null && (
        <Flex
          sx={{
            position: 'sticky',
            display: ['block', 'none'],
            top: 0,
            height: 50,
            ml: -2,
            mt: -2
          }}
        >
          <IconButton sx={{ width: 50, height: 50 }} onClick={close}>
            <Icon path={mdiClose} size={1} />
          </IconButton>
        </Flex>
      )}

      <NextLink href="/" passHref>
        <NavLink mb={2}>Abyss Lab</NavLink>
      </NextLink>
      <Heading mb={3}>
        <NextLink href="/honkai3rd" passHref>
          <NavLink>{t('common.honkai-3rd')}</NavLink>
        </NextLink>
      </Heading>

      <Box sx={{ mb: 3 }}>
        <NavItem target="media" />
      </Box>

      <Box>
        <Flex
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            mb: 2
          }}
        >
          <Box>
            <Switch
              checked={colorMode === 'dark'}
              onChange={event => {
                setColorMode(event.target.checked ? 'dark' : 'default')
              }}
              sx={{
                width: 50,
                'input ~ &': {
                  backgroundColor: 'muted'
                },
                'input:checked ~ &': {
                  backgroundColor: 'primary'
                }
              }}
            />
          </Box>
          <Label>{colorMode === 'default' ? '☀️' : '🌙'}</Label>
        </Flex>
        <Footer />
      </Box>
    </Box>
  )
}

export default Honkai3rdNavigator
