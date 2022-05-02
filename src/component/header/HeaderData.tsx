import {
  HomeOutlined,
  FormOutlined,
  UserOutlined,
  FolderOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { MenuProps } from 'antd'
export const items: MenuProps['items'] = [
  { label: <Link to={'/'}>首页</Link>, key: 'home', icon: <HomeOutlined /> },

  {
    label: <Link to={'/category'}>分类</Link>,
    key: 'category',
    icon: <FolderOutlined />
  },
  {
    label: <Link to={'/archive'}>归档日志</Link>,
    key: 'archive',
    icon: <FormOutlined />
  },
  {
    label: <Link to={'/about'}>关于</Link>,
    key: 'about',
    icon: <UserOutlined />
  }
]
