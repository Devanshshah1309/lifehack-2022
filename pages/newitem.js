import Sidebar from "../components/Sidebar/Sidebar";
import { HStack } from "@chakra-ui/react";
import ItemNew from "../components/Items/ItemNew";
// get all items owned by the user and pass it to Items component
export default function NewItem() {
  return (
    <HStack>
      <Sidebar />
      <ItemNew />
    </HStack>
  );
}
