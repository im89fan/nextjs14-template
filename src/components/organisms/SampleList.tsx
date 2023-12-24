import { Card, CardHeader, Grid, Skeleton, Typography } from "@mui/material";

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
  const { data, setData, isLoading, isError } = useUsers();

  const handleClickDelete = (id: number) => {
    fetch(`/api/users/${id}`)
      .then(() => {
        data && setData([...data.filter((v) => v.id !== id)]);
      })
      .catch(() => {});
  };

  if (isError) {
    return (
      <Typography textAlign="center">データの取得に失敗しました</Typography>
    );
  }

  if (data && !data.length && !isLoading) {
    return <Typography textAlign="center">データが存在しません</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {isLoading &&
        dummy.map((v) => (
          <Grid key={v} item xs={12} md={6}>
            <SampleCardSkeleton />
          </Grid>
        ))}
      {data &&
        data.length &&
        !isLoading &&
        data.map((v) => (
          <Grid key={v.id} item xs={12} md={6}>
            <SampleCard
              id={v.id}
              firstName={v.firstName}
              lastName={v.lastName}
              department={v.department.name}
              onClick={() => handleClickDelete(v.id)}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default SampleList;
