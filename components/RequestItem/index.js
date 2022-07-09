import {
  TabList,
  TabPanel,
  Tab,
  Tabs,
  TabPanels,
  Flex,
  Container,
} from "@chakra-ui/react";
import RequestItemCard from "./RequestItemCard";

export default function Request() {
  // get all items from firebase
  const items = [
    {
      name: "Apples",
      expiry: "14/07/2022",
      owner: "John",
      requestor: "Tom",
      status: 0,
    },
    {
      name: "Banana",
      expiry: "14/07/2022",
      owner: "John",
      requestor: "Tom",
      status: 1,
    },
    {
      name: "Watermelon",
      expiry: "14/07/2022",
      owner: "Tom",
      requestor: "John",
      status: 1,
    },
    {
      name: "Orange",
      expiry: "14/07/2022",
      owner: "Tom",
      requestor: "John",
      status: 0,
    },
  ];

  return (
    <Tabs
      variant="enclosed"
      size={"sm"}
      boxShadow={"lg"}
      align="center"
      colorScheme={"teal"}
    >
      <TabList m="3">
        <Tab>Ongoing Requests</Tab>
        <Tab>Completed Requests</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {items.map(
            (item, index) =>
              item.status == 0 && (
                <RequestItemCard
                  key={index}
                  name={item.name}
                  expiryDate={item.expiry}
                  owner={item.owner}
                  requestor={item.requestor}
                  status={item.status}
                />
              )
          )}
        </TabPanel>
        <TabPanel>
          {items.map(
            (item, index) =>
              item.status == 1 && (
                <RequestItemCard
                  key={index}
                  name={item.name}
                  expiryDate={item.expiry}
                  owner={item.owner}
                  requestor={item.requestor}
                  status={item.status}
                />
              )
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
