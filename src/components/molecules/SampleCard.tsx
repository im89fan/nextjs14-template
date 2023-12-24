import { Card, CardHeader, Avatar } from "@mui/material";
import { useMemo } from "react";

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  onClick: () => void;
}

const SampleCard = ({ firstName, lastName, department }: Props) => {
  const fullName = useMemo(
    () => `${firstName} ${lastName}`,
    [firstName, lastName]
  );

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            {...stringAvatar(`${firstName} ${lastName}`)}
            sx={{ width: 56, height: 56 }}
          />
        }
        title={fullName}
        subheader={department}
      />
    </Card>
  );
};

export default SampleCard;
