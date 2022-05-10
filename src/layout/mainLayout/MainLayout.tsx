import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Header as HeaderCpn } from '../../businessComponents'
import { HeaderBannerCenter } from './MainLayoutStyle'
const { Content } = Layout

export const MainLayout: React.FC = (props) => (
  <Layout>
    <HeaderBannerCenter>
      <HeaderCpn></HeaderCpn>
    </HeaderBannerCenter>
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
)
