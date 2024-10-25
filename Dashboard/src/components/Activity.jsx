import { Avatar, Button, Flex, List, Typography } from "antd";
import React from "react";

const data = [
  {
    name: "Chayan Bain",
    userTime: 1,
  },
  {
    name: "Anurup Biswas",
    userTime: 1,
  },
  {
    name: "Suchana Kamliya",
    userTime: 2,
  },
  {
    name: "Debashis",
    userTime: 3,
  },
  {
    name: "Sam",
    userTime: 5,
  },
];

const Activity = () => {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className="primary--color">
          Recent Activity
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${index}`}
                />
              }
            title={<a href="#">{user.name}</a>}
            description="Participate test"
            ></List.Item.Meta>
            <span className="gray--color">
              {user.userTime}{user.userTime== 1 ? " day ago" : " days ago"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Activity;
