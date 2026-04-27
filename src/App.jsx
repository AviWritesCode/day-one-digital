import useBreakpoint from './hooks/useBreakpoint'
import DesktopView from './views/DesktopView'
import TabletView from './views/TabletView'
import MobileView from './views/MobileView'

export default function App() {
  const { viewType } = useBreakpoint()

  if (viewType === 'mobile') return <MobileView />
  if (viewType === 'tablet') return <TabletView />
  return <DesktopView />
}
