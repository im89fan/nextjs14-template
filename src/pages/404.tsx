import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <Stack spacing={4} justifyContent="center" alignItems="center">
      <Stack textAlign="center">
        <Typography variant="h6" fontWeight="bold">
          ページが見つかりません
        </Typography>
        <Typography variant="caption">
          お探しのページは移動もしくは削除された可能性があります。
        </Typography>
      </Stack>
      <Button variant="contained" size="large" onClick={() => router.push("/")}>
        トップへ
      </Button>
    </Stack>
  );
}
