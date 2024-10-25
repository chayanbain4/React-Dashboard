import { Card, Flex, Image, Typography } from 'antd'
import React from 'react'
import language  from '../assets/logo.png'


const ContentSidebar = () => {
  return (
    <div>
  <Card className="card">
    <Flex vertical gap="">
      <Typography.Title level={4} strong>
        Today <br />5  Participates
      </Typography.Title>
      <Typography.Title level={4} strong>
        This Month <br />
        240 participates
      </Typography.Title>
    </Flex>
    <Image src={language} alt='language' style={{position: 'absolute', bottom:-38,left:50,height:'300px',width:'auto'}}/>
  </Card>
</div>
  )
}

export default ContentSidebar