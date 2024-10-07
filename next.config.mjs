// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
 
export default (/** @type {string} */ phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    assetPrefix: isDev ? undefined : 'portfolio',
  }
  return nextConfig
}