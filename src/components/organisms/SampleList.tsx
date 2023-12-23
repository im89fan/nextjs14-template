import { Card, CardHeader, Grid, Skeleton } from "@mui/material";

import useUsers from "@/hooks/useUsers";

import SampleCard from "../molecules/SampleCard";

const dummy = [0, 1, 2, 3];

const SampleCardSkeleton = () => {
  return (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circular" sx={{ width: 56, height: 56 }} />}
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
    </Card>
  );
};

const SampleList = () => {
  const { data, isLoading, isError } = useUsers();

  return (
    <Grid container spacing={2}>
      {isLoading &&
        dummy.map((v) => (
          <Grid key={v} item xs={12} md={6}>
            <SampleCardSkeleton />
          </Grid>
        ))}
      {data &&
        !isLoading &&
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
};

export default SampleList;
