import React from 'react'
import { Avatar, Typography } from 'antd'
import { SideBarData } from './NameCardData'
import {
  Wave,
  NameCardWrapper,
  NameCardWrapped,
  NameCardLink,
  NameCardMedia,
  NameCardTitle,
  NameCardAvator
} from './NameCardStyle'
const { Title, Paragraph, Text, Link } = Typography
export const NameCard: React.FC = (props) => {
  const { avator, title, subTitle, homepages } = SideBarData
  return (
    <NameCardWrapper>
      <NameCardWrapped className="wrapped">
        <NameCardAvator>
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
        </NameCardAvator>

        <NameCardTitle>
          <Title level={3}>{title}</Title>
          <Paragraph>{subTitle}</Paragraph>
        </NameCardTitle>
        <NameCardLink>
          {Object.entries(homepages).map((item, index) => {
            return (
              <NameCardMedia key={index}>
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
              </NameCardMedia>
            )
          })}
        </NameCardLink>
      </NameCardWrapped>
    </NameCardWrapper>
  )
}
