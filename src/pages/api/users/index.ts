import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  firstName: string;
  lastName: string;
  department: {
    id: number;
    name: string;
  };
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  await new Promise((res) => setTimeout(res, 1500));
  res.status(200).json([
    {
      id: 1,
      firstName: "田中",
      lastName: "太郎",
      department: { id: 1, name: "営業部" },
    },
    {
      id: 2,
      firstName: "山田",
      lastName: "花子",
      department: { id: 1, name: "営業部" },
    },
  ]);
}
