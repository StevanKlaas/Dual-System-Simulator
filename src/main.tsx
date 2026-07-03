import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Sim from './Simulator'

createRoot(document.getElementById('root')!).render(
  <>
    <Sim />
    <SpeedInsights />
  </>
)
