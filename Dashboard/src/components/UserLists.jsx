import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";
import React from "react";

const UserLists = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="top-user">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Users
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>

        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>

              <Tooltip title="User 2" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg" />
              </Tooltip>

              <Tooltip title="User 3" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg" />
              </Tooltip>

              <Tooltip title="User 4" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-portrait-tender-girl-with-short-hair-smiling-white-teeth-looking-happy-playing-with-haircut-standing-against-white-wall_176420-34431.jpg" />
              </Tooltip>

              <Tooltip title="User 5" placement="top">
                <Avatar src="https://img.freepik.com/premium-psd/adult-man-nutural-confident-portrait-concept_53876-22253.jpg" />
              </Tooltip>

              <Tooltip title="User 6" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wall_176420-37520.jpg" />
              </Tooltip>

              <Tooltip title="User 7" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              
              <Typography.Text type="secondary" strong>
                16,000 Users

              </Typography.Text>
              
            </Flex>
            
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className="featured-user">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Featured Users
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={4}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>

              <Tooltip title="User 2" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg" />
              </Tooltip>

              <Tooltip title="User 3" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg" />
              </Tooltip>

              <Tooltip title="User 4" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-portrait-tender-girl-with-short-hair-smiling-white-teeth-looking-happy-playing-with-haircut-standing-against-white-wall_176420-34431.jpg" />
              </Tooltip>

              <Tooltip title="User 5" placement="top">
                <Avatar src="https://img.freepik.com/premium-psd/adult-man-nutural-confident-portrait-concept_53876-22253.jpg" />
              </Tooltip>

              <Tooltip title="User 6" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wall_176420-37520.jpg" />
              </Tooltip>

              <Tooltip title="User 7" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              
              <Typography.Text type="secondary" strong>
                1,300 Participate

              </Typography.Text>
              
            </Flex>
            
          </Flex>
        </Card>
        
      </Flex>
    </Flex>
  );
};

export default UserLists;
