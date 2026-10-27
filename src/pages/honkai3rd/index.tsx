/** @jsxImportSource theme-ui */
import { Box, Heading, Paragraph, Flex, Label, Switch } from '@theme-ui/components'
import { BattlesuitData } from '../../lib/honkai3rd/battlesuits'
import { WeaponData } from '../../lib/honkai3rd/weapons'
import { VersionData } from '../../lib/honkai3rd/versions'
import { getI18NProps } from '../../server/i18n'
import { NextPageContext } from 'next'
import { useTranslation } from '../../lib/i18n'
import Head from '../../components/atoms/Head'
import { StigmataSet } from '../../lib/honkai3rd/stigmata'
import NavItem from '../../components/atoms/NavItem'
import { useColorMode } from 'theme-ui'
import PageLink from '../../components/atoms/PageLink'
import Footer from '../../components/v2/Footer'

interface VersionIndexPageProps {
  versionDataList: VersionData[]
  currentVersionData: VersionData
  currentVersionNewBattlesuits: BattlesuitData[]
  currentVersionNewWeapons: WeaponData[]
  currentVersionNewStigmataSets: StigmataSet[]
}

const HomePage = ({ }: VersionIndexPageProps) => {
  const { t } = useTranslation()

  const [colorMode, setColorMode] = useColorMode()
  return (
    <Box>
      <Head title={`${t('common.honkai-3rd')} - ${t('common.abyss-lab')}`} canonicalHref={`/honkai3rd`} />

      <Box p={2}>
        <Head title={`${t('common.honkai-3rd')} - ${t('common.abyss-lab')}`} canonicalHref={`/honkai3rd`} />

        <Heading as="h2">
          <PageLink href="/">Abyss Lab</PageLink>
        </Heading>
        <Heading as="h1">Honkai 3rd Data</Heading>

        <Paragraph mb={3}>Welcome, Captain!</Paragraph>

        <Box sx={{ mb: 3 }}>
          {/* <NavItem target="battlesuits" size="lg" />
          <NavItem target="weapons" size="lg" />
          <NavItem target="stigmata" size="lg" />
          <NavItem target="elfs" size="lg" />
          <NavItem target="elysian-realm" size="lg" /> */}
          <NavItem target="media" size="lg" />
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
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export async function getStaticProps({ locale }: NextPageContext) {
  return {
    props: {
      ...(await getI18NProps(locale))
    }
  }
}

export default HomePage
