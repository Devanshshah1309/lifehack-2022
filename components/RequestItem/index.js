import { TabList, TabPanel, Tab, Tabs, TabPanels } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RequestItemCard from "./RequestItemCard";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

function Request() {
  const { user } = useAuth();
  const [currItems, setItems] = useState([]);

  // useEffect(() => {
  //   const getUserItems = async () => {
  //     const userDocRef = doc(db, "users", user.uid);

  //     const buyer = query(
  //       collection(db, "trades"),
  //       where("buyerId", "==", userDocRef)
  //     );
  //     const owner = query(
  //       collection(db, "trades"),
  //       where("traderId", "==", userDocRef)
  //     );

  //     const querySnapshot = await getDocs(buyer);
  //     const querySnapshot2 = await getDocs(owner);

  //     const buyerList = querySnapshot.docs.map((doc) => doc.data());
  //     const ownerList = querySnapshot2.docs.map((doc) => doc.data());
  //     const list = [...buyerList, ...ownerList];
  //     const newList = list.map((doc) => {
  //       return {
  //         ...doc,
  //         buyerId: doc.buyerId.id,
  //         traderId: doc.traderId.id,
  //       };
  //     });

  //     setItems(newList);
  //     getUserItems();
  //   };
  //   getUserItems();
  // }, []);

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
          {currItems.map(
            (item, index) =>
              item.tradeStatus == 0 && (
                <RequestItemCard
                  key={index}
                  tradeStartAt={item.tradeStartAt
                    ?.toDate()
                    .toISOString()
                    .substring(0, 10)}
                  owner={item.traderId}
                  requestor={item.buyerId}
                  status={item.tradeStatus}
                />
              )
          )}
        </TabPanel>
        <TabPanel>
          {currItems.map((item, index) => {
            return (
              item.status == 1 && (
                <RequestItemCard
                  key={index}
                  tradeStartAt={item.tradeStartAt
                    ?.toDate()
                    .toISOString()
                    .substring(0, 10)}
                  owner={item.traderId}
                  requestor={item.buyerId}
                  status={item.tradeStatus}
                />
              )
            );
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Request;
