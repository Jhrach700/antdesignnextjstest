import React, { useState, useEffect } from "react";
//import { useSelector } from "react-redux";
// import { useMoralis ,useWeb3ExecuteFunction} from "react-moralis";
// import axios from 'axios';
import { Table, Tag, Modal, Image, Tabs, Menu, Dropdown, Button } from "antd";
import Icon, { SettingOutlined, DatabaseOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

import moment from "moment";
import {
  FileSearchOutlined,
  RightCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { useRouter } from 'next/router'
import Link from 'next/link'


const styles = {
  flipcard: {
    width: "1600px",
    height: "515px",
    position: "relative",
  },
  flipImg: {
    borderRadius: "10px",
    width: "512px",
    height: "512px"
  }
}

function Gallery({ tab_num = "items" }) {
  const coll_img = "https://stratosnft.io/_next/image?url=https%3A%2F%2Ffanbase-1.s3.amazonaws.com%2Fquixotic-collection-profile%2FVVWXmSVk_400x400_tPlvm1B.jpeg&w=1920&q=75"
  const { TabPane } = Tabs;
  const [activeTab, setActiveTab] = useState(tab_num);

  const styles = {
    item: {
      display: "flex",
      alignItems: "center",
      height: "42px",
      fontWeight: "500",
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
      padding: "0 10px",
    },
    button: {
      border: "2px solid rgb(231, 234, 243)",
      borderRadius: "12px",
    },
  };
  
  const menuItems = [
    {
      key: "0x1",
      value: "Edit",
      icon: <EditOutlined />,
    },
    {
      key: "0x2",
      value: "Creator Royalty",
      icon: <DatabaseOutlined />,
    },
    {
      key: "0x3",
      value: "Add item",
      icon: <PlusOutlined />,
    },
  ];
  

  const handleMenuClick = (e) => {
		try {
			console.log("switch to: ", e.key);
			//switchNetwork(e.key);
		} catch (_error) {
			console.log(_error);
			//handleMenuClick(e);
		}
	};

	const menu = (
		<Menu onClick={handleMenuClick}>
			{menuItems.map((item) => (
				<Menu.Item key={item.key} icon={item.icon} style={styles.item}>
					<span style={{ marginLeft: "5px" }}>{item.value}</span>
				</Menu.Item>
			))}
		</Menu>
	);


  function callback(key) {
    console.log("old active tab:", activeTab)
    setActiveTab(key)
    console.log("KEY BTW", key);
    // console.log("wallet_addr", wallet_addr)
    console.log("tab_num:", tab_num)
    console.log("active tab:", activeTab)
    //Shallow routing doesn't actually refresh the page! Just changes the url
    //router.push({
    //    pathname: '/profile/' + wallet_addr,
    //    query: { tab: key }
    //},
    //    undefined, { shallow: true }
    //)
  }


  return (
    <>
      <div className="container">
        <div className="h-screen">

          <div className="h-1/2 bg-blue-300">
          </div>

          <div className="h-1/2 ">
            <div className="grid grid-cols-4">
              <div className="pl-8 pr-8 pb-8 pt-36 col-span-1 font-sans">
                <div className="font-bold text-2xl">
                  Collection Name
                </div>
                <div className="pt-2 text-base text-gray-600 font-sans">
                  This is a test description that will go here!
                  This is a test description that will go here!

                  This is a test description that will go here!

                  This is a test description that will go here!

                  This is a test description that will go here!

                  This is a test description that will go here!

                  This is a test description that will go here!

                </div>
              </div>

              <div className="col-span-3 ">

                <div className="p-8">
                  <div className="shadow-2xl p-4 rounded-full border-black border-2 shadow-2xl grid grid-cols-5">
                    <div className="font-bold flex flex-col justify-center items-center">
                      <div className="text-xl">10000</div>
                      items</div>

                    <div className="font-bold flex flex-col justify-center items-center">
                      <div className="text-xl">10000</div>
                      owners</div>

                    <div className="font-bold flex flex-col justify-center items-center">
                      <div className="text-xl">10000</div>
                      listed</div>

                    <div className="font-bold flex flex-col justify-center items-center">
                      <div className="text-xl">0</div>
                      sales</div>

                    <div className="font-bold flex flex-col justify-center items-center">
                      <div className="text-xl">0.05</div>
                      floor</div>
                  </div>
                </div>

                <div className="pr-5 flex flex-row">
                  <span className="w-910">
                    <Tabs tabBarStyle={{ height: "30px", color: "red" }}
                      type="card" activeKey={activeTab} onChange={callback} className="">

                      <TabPane
                        // tabBarStyle={{ height: 20, color: "red" }}
                        // style={{ height: 200, color: "#363636" }}
                        // tab={<span style={{ color: "red" }}></span>}
                        className="font-bold" tab="Items" key="items">
                        <div className="pl-2">Content of Tab Pane 1</div>
                        {/* <Created/> */}
                        {/* <ProfileQuery wallet_addr={wallet_addr} query_type={"collected"} /> */}
                      </TabPane>

                      <TabPane tab="Activity" key="activity">
                        <div className="pl-2">Content of Tab Pane 2</div>
                        {/* <div></div>
                                    Component with inputs for listed query will go here */}
                        {/* <ProfileQuery wallet_addr={wallet_addr} query_type={"listed"} /> */}
                      </TabPane>
                      {/* <TabPane tab="Tab 3" key="3">
                                    Content of Tab Pane 3
                                </TabPane> */}
                    </Tabs>
                  </span>

                  <div className="pt-0.5">
                    {/* <SettingOutlined style={{ fontSize: '16px', color: '#08c' }} >
                    </SettingOutlined > */}

                    <Dropdown overlay={menu} trigger={["click"]}>
                      {/* <Button
                        key={"1"}
                        // icon={selected?.icon}
                        style={{ ...styles.button, ...styles.item }}>
                        <span style={{ marginLeft: "0px" }}></span> */}
                        <SettingOutlined style={{ fontSize: '16px', color: '#08c' }}  />
                      {/* </Button> */}
                    </Dropdown>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="p-8">
            <img className="absolute top-1/4 h-265 w-265 rounded-lg"
              src={coll_img}>
            </img>
          </div>
        </div>
      </div>


    </>


  );
};

export default Gallery;