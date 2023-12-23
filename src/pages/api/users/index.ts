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
      firstName: "R",
      lastName: "指定",
      department: { id: 1, name: "営業部" },
    },
    {
      id: 2,
      firstName: "呂布",
      lastName: "カルマ",
      department: { id: 1, name: "営業部" },
    },
    {
      id: 3,
      firstName: "DOTA",
      lastName: "MA",
      department: { id: 2, name: "人事部" },
    },
    {
      id: 4,
      firstName: "T",
      lastName: "Pablow",
      department: { id: 2, name: "人事部" },
    },
    {
      id: 5,
      firstName: "KT",
      lastName: "ちゃん",
      department: { id: 2, name: "人事部" },
    },
    {
      id: 6,
      firstName: "梵",
      lastName: "頭",
      department: { id: 2, name: "人事部" },
    },
    {
      id: 7,
      firstName: "SA",
      lastName: "M",
      department: { id: 2, name: "人事部" },
    },
    {
      id: 8,
      firstName: "MA",
      lastName: "KA",
      department: { id: 2, name: "人事部" },
    },
    {
      id: 9,
      firstName: "CHE",
      lastName: "HON",
      department: { id: 2, name: "人事部" },
    },
    {
      id: 10,
      firstName: "韻",
      lastName: "マン",
      department: { id: 2, name: "人事部" },
    },
  ]);
}
