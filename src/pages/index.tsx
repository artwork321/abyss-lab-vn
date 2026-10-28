/** @jsxImportSource theme-ui */
import { Box, Text, Image } from '@theme-ui/components'
import { keyframes } from '@emotion/react'
import PageLink from '../components/atoms/PageLink'
import RootNavigator from '../components/organisms/RootNavigator'
import Head from '../components/atoms/Head'
import { assetsBucketBaseUrl } from '../lib/consts'
import Footer from '../components/v2/Footer'
import { blossomBackground } from '../lib/theme'

const fadeUp = keyframes({
  from: { opacity: 0, transform: 'translateY(16px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

const IndexPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        ...blossomBackground,
      }}
    >
      <Head title="Abyss Lab VN - Visual Novel Honkai Impact 3rd Việt hóa" />
      <RootNavigator />

      <Box
        as="main"
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: [3, 4, 5],
          py: [3, 4, 5],
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <PageLink
          href="/honkai3rd/media"
          aria-label="Xem Visual Novels Honkai Impact 3rd"
          sx={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: ['min(62vh, 520px)', 'min(70vh, 700px)'],
            minHeight: [320, 400],
            overflow: 'hidden',
            borderRadius: 4,
            bg: 'dark',
            boxShadow: '0 24px 60px -20px rgba(0, 0, 0, 0.45)',
            animation: `${fadeUp} 600ms ease-out both`,
            transition: 'box-shadow 300ms ease, transform 300ms ease',
            '&:hover': {
              boxShadow: '0 32px 70px -20px rgba(0, 0, 0, 0.55)',
            },
            '&:hover img': { transform: 'scale(1.04)' },
            '&:hover .cta-arrow': { transform: 'translateX(6px)' },
            '&:focus-visible': {
              outline: '3px solid',
              outlineColor: 'primary',
              outlineOffset: 4,
            },
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
              '&:hover img': { transform: 'none' },
              '&:hover .cta-arrow': { transform: 'none' },
            },
          }}
        >
          <Image
            alt="Honkai Impact 3rd wallpaper"
            src={`${assetsBucketBaseUrl}/honkai3rd/wallpaper.png`}
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 700ms cubic-bezier(0.2, 0.6, 0.2, 1)',
            }}
          />

          {/* Overlay: bottom fade for text + soft vignette */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: [
                'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.82) 100%)',
                'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.78) 100%), radial-gradient(120% 80% at 50% 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)',
              ],
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: ['center', 'flex-start'],
              textAlign: ['center', 'left'],
              gap: 2,
              p: [4, 5],
              color: 'white',
            }}
          >
            <Text
              sx={{
                fontSize: 1,
                fontWeight: 'bold',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}
            >
              Honkai Impact 3rd · Việt hóa
            </Text>

            <Text
              as="h1"
              sx={{
                m: 0,
                fontSize: [5, 6, 7],
                lineHeight: 1.1,
                fontWeight: 'bold',
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.6)',
              }}
            >
              Visual Novels
            </Text>

            <Box
              sx={{
                mt: 2,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                px: 4,
                py: 2,
                borderRadius: 'full',
                fontSize: 2,
                fontWeight: 'bold',
                color: 'white',
                bg: 'rgba(255, 255, 255, 0.14)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              Bắt đầu đọc
              <span
                className="cta-arrow"
                sx={{ display: 'inline-block', transition: 'transform 250ms ease' }}
              >
                →
              </span>
            </Box>
          </Box>
        </PageLink>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: [3, 4, 5],
          borderTop: 'default',
        }}
      >
        <Box sx={{ py: 2 }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default IndexPage