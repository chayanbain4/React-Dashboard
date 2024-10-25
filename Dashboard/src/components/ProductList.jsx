import { Button, Card, Flex, Image, Typography } from 'antd';
import React from 'react';
import LanguageData from './LanguageData';

const {Meta} =Card;
const ProductList = () => {
  return (
    <div>
      <Flex align="center" justify="space-between" className='lis'>
        <Typography.Title level={3} strong className="primary--color">
          Languages
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <Flex align="center" gap="large">
  {LanguageData.map((language) => (
    <Card key={language.id} hoverable className="language-card">
      <Image src={language.picture} style={{ width: '130px' }}/>
      <Meta title={language.name} style={{marginTop:'1rem'}}/>
    </Card>
  ))}
</Flex>
    </div>
  );
};

export default ProductList;