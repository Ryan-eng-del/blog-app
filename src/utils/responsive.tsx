import React, { useEffect, useState } from 'react'
interface Response {
  children: any
}
export const ViewPortContext = React.createContext({ width: window.innerWidth })
export const ViewPortProviderCpn: React.FC<Response> = (props) => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  return (
    <ViewPortContext.Provider value={{ width }}>
      {props.children}
    </ViewPortContext.Provider>
  )
}
