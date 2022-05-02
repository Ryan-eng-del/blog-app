import React from 'react'
import { ViewPortContext } from '../utils/responsive'
export const useViewPort = () => {
  const { width } = React.useContext(ViewPortContext)
  return { width }
}
