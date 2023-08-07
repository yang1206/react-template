import type { RouteObject as Routes } from 'react-router-dom'

export interface MetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}
export type RouteObject = Routes & {
  name?: string
  meta?: MetaProps
  isLink?: string
  auth?: boolean
}
