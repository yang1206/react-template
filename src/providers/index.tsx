import type { FC, PropsWithChildren } from 'react'
import React from 'react'

import { JotaiStoreProvider } from './jotai'
import { ReactQueryProvider } from './react-query'
import { useRefValue } from '@/hooks/useRefValue'

const ProviderComposer: FC<{
  contexts: JSX.Element[]
} & PropsWithChildren> = ({ contexts, children }) => {
  return contexts.reduceRight((kids: any, parent: any) => {
    return React.cloneElement(parent, { children: kids })
  }, children)
}

export function Providers(props: PropsWithChildren) {
  return (
    <ProviderComposer contexts={useRefValue(() => [<JotaiStoreProvider key="JotaiStoreProvider" />, <ReactQueryProvider key="react-query" />])}>
      {props.children}
    </ProviderComposer>
  )
}
