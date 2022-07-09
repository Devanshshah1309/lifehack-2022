import {
  TabList,
  TabPanel,
  Tab,
  Tabs,
  TabPanels,
  Flex,
  Container,
} from "@chakra-ui/react";
import RequestItemCard from "../components/RequestItem/RequestItemCard";
import Sidebar from "../components/Sidebar/Sidebar";

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
    <Flex>
      <Sidebar />
      <Container width="4xl" height="100vh">
        <Tabs
          size="sm"
          variant="line"
          width="100%"
          boxShadow="lg"
          colorScheme="teal.500"
          align="center"
        >
          <TabList m="3">
            <Tab _selected={{ color: "white", bg: "teal.500" }}>
              Ongoing Requests
            </Tab>
            <Tab _selected={{ color: "white", bg: "teal.500" }}>
              Completed Requests
            </Tab>
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
      </Container>
    </Flex>
  );
}
