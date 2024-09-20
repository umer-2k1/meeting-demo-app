import React from "react";
import { Box } from "../ui/box";
import { Avatar, Flex, Image, Tag, Typography } from "antd";
const { Text, Title } = Typography;
import cloud from "../../assets/cloud.png";

const WeatherCard = () => {
  return (
    <Box className="bg-bg-100 text-white !h-[200px] rounded-xl p-6">
      <Flex justify="space-between" align="center">
        <Text className="text-white text-md">Seattle,WA,USA</Text>
        <span className="flex items-center ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10.2761 6.5 10.5 6.72386 10.5 7V12.063C11.3626 12.285 12 13.0681 12 14C12 15.1046 11.1046 16 10 16C8.89543 16 8 15.1046 8 14C8 13.0681 8.63739 12.285 9.5 12.063V7C9.5 6.72386 9.72386 6.5 10 6.5ZM10 2C8.34315 2 7 3.34315 7 5L7.00008 11.3541C6.37808 12.0589 6 12.9857 6 14C6 16.2091 7.79086 18 10 18C12.2091 18 14 16.2091 14 14C14 12.9857 13.6219 12.0589 12.9999 11.3541L13 5C13 3.34315 11.6569 2 10 2ZM10 3C11.1046 3 12 3.89543 12 5L11.9999 11.7546L12.1428 11.9004C12.6736 12.442 13 13.1824 13 14C13 15.6568 11.6569 17 10 17C8.34315 17 7 15.6568 7 14C7 13.1824 7.32642 12.442 7.85719 11.9004L8.00008 11.7546L8 5C8 3.89543 8.89543 3 10 3Z"
              fill="white"
            />
          </svg>

          <Text className="text-white text-md">-2°C Snow</Text>
        </span>
      </Flex>

      <Box className=" flex items-center justify-center">
        <Image preview={false} src={cloud} alt="weather" />
      </Box>
      <Flex justify="space-between" align="center">
        <Text className="text-white text-md">Average temperature</Text>
        <span className="flex items-center ">
          <Text className="text-white text-lg font-semibold pr-1">-2</Text>

          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="24" height="24" rx="2" fill="#2A85FF" />
            <path
              d="M7.14819 9.29531C6.78881 9.29531 6.48256 9.16875 6.22944 8.91562C5.97631 8.65937 5.84975 8.35 5.84975 7.9875C5.84975 7.62812 5.97475 7.325 6.22475 7.07812C6.47475 6.82812 6.77944 6.70312 7.13881 6.70312C7.50131 6.70312 7.80913 6.82812 8.06225 7.07812C8.3185 7.32812 8.44663 7.63125 8.44663 7.9875C8.44663 8.35 8.32006 8.65937 8.06694 8.91562C7.81381 9.16875 7.50756 9.29531 7.14819 9.29531ZM7.14819 7.25156C6.94506 7.25156 6.77163 7.32344 6.62788 7.46719C6.48413 7.61094 6.41225 7.78437 6.41225 7.9875C6.41225 8.19687 6.48256 8.37656 6.62319 8.52656C6.76381 8.67344 6.93569 8.74687 7.13881 8.74687C7.34194 8.74687 7.51694 8.67187 7.66381 8.52187C7.81069 8.37187 7.88413 8.19375 7.88413 7.9875C7.88413 7.78125 7.81225 7.60781 7.6685 7.46719C7.52475 7.32344 7.35131 7.25156 7.14819 7.25156ZM18.344 18.0312C17.5159 18.4688 16.4846 18.6875 15.2503 18.6875C13.6565 18.6875 12.3805 18.1745 11.4221 17.1484C10.4638 16.1224 9.98463 14.776 9.98463 13.1094C9.98463 11.3177 10.5237 9.86979 11.6018 8.76562C12.6799 7.66146 14.0471 7.10938 15.7034 7.10938C16.7659 7.10938 17.6461 7.26302 18.344 7.57031V8.96875C17.5419 8.52083 16.6565 8.29688 15.6878 8.29688C14.4013 8.29688 13.357 8.72656 12.5549 9.58594C11.7581 10.4453 11.3596 11.5938 11.3596 13.0312C11.3596 14.3958 11.732 15.4844 12.4768 16.2969C13.2268 17.1042 14.2086 17.5078 15.4221 17.5078C16.5471 17.5078 17.5211 17.2578 18.344 16.7578V18.0312Z"
              fill="#E1E1E1"
            />
          </svg>
        </span>
      </Flex>
    </Box>
  );
};

export default WeatherCard;
