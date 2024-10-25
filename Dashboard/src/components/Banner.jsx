import { Button, Card, Flex, Typography } from 'antd';
import React from 'react';

const Banner = () => {
  return (
    <Card style={{height:235, padding:'20px'}}>
      <Flex vertical gap='30px'>
        <Flex vertical align='flex-start'>
          <Typography.Title level={2} strong>
          Welcome coders!
          </Typography.Title>
          <Typography.Text type="secondary" strong>
           A space for developers to learn, share, and improve their coding skills with test and challenges.
          </Typography.Text>
        </Flex>
        <Flex gap='large'>
            <Button type='primary' size='large'>
                Explore More
            </Button>
            <Button size='large'>Daily Challenge</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;