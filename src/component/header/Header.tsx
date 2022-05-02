import React from 'react'
import { Menu, Row, Col } from 'antd'
import { items } from './HeaderData'
import { useViewPort } from '../../hook/useViewPort'
/* 响应式 */
const responsiveMobile = { xxl: 0, xl: 0, lg: 0, sm: 0, xs: 24 }
export const Header: React.FC = (props) => {
  const { width } = useViewPort()
  const breakPoint = 620
  return (
    <Row
      style={{
        justifyContent: 'center',
        marginTop: '22px'
      }}
    >
      {width > breakPoint ? (
        <section
          style={{
            borderRadius: '16px',
            boxShadow: '1px 3px 10px rgb(153 153 153 / 30%)',
            overflow: 'hidden'
          }}
        >
          <Col>
            <Menu
              mode="horizontal"
              items={items}
              defaultSelectedKeys={['home']}
            />
          </Col>
        </section>
      ) : (
        <Col {...responsiveMobile}>
          <div style={{ height: 46 }}></div>
        </Col>
      )}
    </Row>
  )
}
