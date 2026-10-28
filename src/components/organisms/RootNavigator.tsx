/** @jsxImportSource theme-ui */
import { Box, Flex, NavLink } from '@theme-ui/components'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const links = [{ href: '/honkai3rd', label: 'Honkai 3rd' }]

const RootNavigator = () => {
  const { asPath } = useRouter()

  return (
    <Box
      as="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        isolation: 'isolate',
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
        // Translucent theme-colored layer, so it works in light and dark mode
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          bg: 'background',
          opacity: 0.78,
        },
      }}
    >
      <Flex
        as="nav"
        aria-label="Main"
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: [3, 4, 5],
          height: 56,
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <NextLink href="/" passHref>
          <NavLink
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              p: 0,
              fontSize: 3,
              fontWeight: 'bold',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              color: 'inherit',
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary',
                outlineOffset: 4,
                borderRadius: 2,
              },
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
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                color: 'white',
                bg: 'primary',
              }}
            >
              VN
            </Box>
          </NavLink>
        </NextLink>

        <Flex sx={{ alignItems: 'center', gap: 1 }}>
          {links.map(({ href, label }) => {
            const active = asPath === href || asPath.startsWith(`${href}/`)
            return (
              <NextLink key={href} href={href} passHref>
                <NavLink
                  aria-current={active ? 'page' : undefined}
                  sx={{
                    px: 3,
                    py: 2,
                    borderRadius: 'full',
                    fontSize: 1,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: active ? 1 : 0.75,
                    bg: active ? 'rgba(128, 128, 128, 0.18)' : 'transparent',
                    transition: 'background-color 200ms ease, opacity 200ms ease',
                    '&:hover': {
                      opacity: 1,
                      bg: 'rgba(128, 128, 128, 0.14)',
                    },
                    '&:focus-visible': {
                      outline: '2px solid',
                      outlineColor: 'primary',
                      outlineOffset: 2,
                    },
                    '@media (prefers-reduced-motion: reduce)': {
                      transition: 'none',
                    },
                  }}
                >
                  {label}
                </NavLink>
              </NextLink>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export default RootNavigator