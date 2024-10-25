import { Flex } from 'antd';
import React from 'react';
import Banner from './Banner';
import ProductList from './ProductList';
import UserLists from './UserLists';

const MainContent = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem" />
      <Banner />
      <ProductList />
      <UserLists/>
    </div>
  );
};

export default MainContent;