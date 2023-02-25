'use client'
import RootStyleRegistry from './RootStyleRegistry'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <RootStyleRegistry>{children}</RootStyleRegistry>
}
