import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Sim from './Simulator'

createRoot(document.getElementById('root')!).render(
  <>
    <Sim />
    <Analytics />
    <SpeedInsights />
  </>
)
