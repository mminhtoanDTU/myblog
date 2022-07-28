import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Space, DatePicker, Card } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';

const Home: NextPage = () => {
  const onChange = () => {};
  return (
    <div className={styles.container}>
      <Space direction="vertical">
        <h1>Hello world</h1>
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
      </Space>
    </div>
  )
}

export default Home
