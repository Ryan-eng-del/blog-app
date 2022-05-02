import React from 'react'
import { Avatar, Typography } from 'antd'
import { SideBarData } from './SideBarData'
import { Wave, SideBarWrapper } from './SiderBarStyle'
const { Title, Paragraph, Text, Link } = Typography
export const SideBar: React.FC = (props) => {
  const { avator, title, subTitle, homepages } = SideBarData
  return (
    <SideBarWrapper>
      <div className="wrapped">
        <div className="avator">
          <Wave>
            <div className="pointer1"></div>
            <div className="pointer2"></div>
            <div className="pointer3"></div>
            <div className="pointer4"></div>
            <div className="pointer5"></div>
          </Wave>
          <Avatar
            size={160}
            src={avator}
            shape="circle"
            style={{ position: 'relative', zIndex: 999 }}
          />
        </div>

        <div className="title">
          <Title level={3}>{title}</Title>
          <Paragraph>{subTitle}</Paragraph>
        </div>
        <div className="link">
          {Object.entries(homepages).map((item, index) => {
            return (
              <span key={index} className="my-media">
                <span className="page-icon" style={{ margin: 8 }}>
                  {item[1].icon}
                </span>
                <Link href={item[1].link}>
                  <Text
                    type="secondary"
                    strong={true}
                    style={{ letterSpacing: 2 }}
                  >
                    {item[1].description}
                  </Text>
                </Link>
              </span>
            )
          })}
        </div>
      </div>
    </SideBarWrapper>
  )
}
