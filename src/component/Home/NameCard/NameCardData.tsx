import { GithubOutlined, DeploymentUnitOutlined } from '@ant-design/icons'
export const SideBarData = {
  avator: require('../../../assets/img/avatorPro.jpg'),
  title: '书笙',
  subTitle: '欲买桂花同载酒',
  homepages: {
    github: {
      link: 'github.com',
      icon: <GithubOutlined />,
      description: 'GitHub'
    },
    juejin: {
      link: 'juejin',
      icon: <DeploymentUnitOutlined />,
      description: 'JueJin'
    }
  }
}
