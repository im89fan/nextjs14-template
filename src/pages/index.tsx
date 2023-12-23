import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import SampleCard from "@/components/molecules/SampleCard";

export default function Page() {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {data &&
        data.map((v) => (
          <Grid key={v.id} item xs={12} md={6}>
            <SampleCard
              firstName={v.firstName}
              lastName={v.lastName}
              department={v.department.name}
            />
          </Grid>
        ))}
    </Grid>
  );
}
