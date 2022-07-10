import React from "react";
import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react";

function UserAvatar(props) {
  const { name, src } = props;

  return (
    <Tooltip label={name}>
      <Avatar name={name} src={src}>
        <AvatarBadge
          bg="green.400"
          boxSize={3}
          borderWidth={2}
          right={1}
          bottom={1}
        />
      </Avatar>
    </Tooltip>
  );
}

export default UserAvatar;
