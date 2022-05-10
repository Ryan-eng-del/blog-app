import React, { useState } from 'react'
import { Menu, Row, Col, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { items } from './HeaderData'
import {
  WebHeaderMenuWrapper,
  MobileHeaderMenuWrapper,
  MenuIconWrapper
} from './HeaderStyle'
import { useViewPort } from '../../hook/useViewPort'
export const Header: React.FC = (props) => {
  const { width } = useViewPort()
  const [visible, setVisible] = useState<boolean>(false)
  const [placement] = useState<'left'>('left')
  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const breakPoint = 620
  return (
    <Row
      style={{
        justifyContent: 'center',
        marginTop: '22px'
      }}
    >
      {width > breakPoint ? (
        <WebHeaderMenuWrapper>
          <Col>
            <Menu
              mode="horizontal"
              items={items}
              defaultSelectedKeys={['home']}
            />
          </Col>
        </WebHeaderMenuWrapper>
      ) : (
        <Col>
          <MobileHeaderMenuWrapper>
            <MenuIconWrapper
              onClick={() => {
                showDrawer()
              }}
            >
              <MenuOutlined />
            </MenuIconWrapper>
          </MobileHeaderMenuWrapper>
        </Col>
      )}
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={200}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Row>
  )
}
