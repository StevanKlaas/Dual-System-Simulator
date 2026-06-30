import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import Sim from './Simulator'

createRoot(document.getElementById('root')!).render(
  <>
    <Sim />
    <Analytics />
  </>
)
