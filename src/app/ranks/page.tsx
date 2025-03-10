"use client";

import Avatar from "@/components/Avatar";
import Dropdown from "@/components/Dropdown";
import { Tab, TabList, TabPanel, TabPanels, TabProvider } from "@/components/Tab";
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@/components/Table";

interface LeaderboardEntry {
  rank: number;
  username: string;
  avatarColor: string;
  referrals: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, username: "Lord Stark", avatarColor: "#a085e2", referrals: 23537 },
  { rank: 2, username: "Gumball", avatarColor: "#ff9c52", referrals: 22300 },
  { rank: 3, username: "Oliver Aton", avatarColor: "#7bbd7e", referrals: 19454 },
  { rank: 4, username: "Jackie Moon", avatarColor: "#bde172", referrals: 19390 },
  { rank: 5, username: "Captain Polar", avatarColor: "#ff64a8", referrals: 18993 },
  { rank: 6, username: "MC Weed", avatarColor: "#41a8f8", referrals: 18466 },
  { rank: 7, username: "Balor Fire", avatarColor: "#3df7a8", referrals: 18201 },
  { rank: 8, username: "Super Chia", avatarColor: "#ffad73", referrals: 17899 },
  { rank: 9, username: "Paltito", avatarColor: "#a45aa3", referrals: 17673 },
  { rank: 10, username: "Dr. Doom", avatarColor: "#aa3399", referrals: 17334 },
  { rank: 11, username: "CheeseBacon", avatarColor: "#8ad1e6", referrals: 17332 },
  { rank: 12, username: "Little Caesar", avatarColor: "#5dff8d", referrals: 17189 },
  { rank: 13, username: "Balor Fire", avatarColor: "#3df7a8", referrals: 18201 },
  { rank: 14, username: "Super Chia", avatarColor: "#ffad73", referrals: 17899 },
  { rank: 15, username: "Paltito", avatarColor: "#a45aa3", referrals: 17673 },
  { rank: 16, username: "Dr. Doom", avatarColor: "#aa3399", referrals: 17334 },
  { rank: 17, username: "CheeseBacon", avatarColor: "#8ad1e6", referrals: 17332 },
  { rank: 18, username: "Little Caesar", avatarColor: "#5dff8d", referrals: 17189 },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-4xl h-full mx-auto p-6 items-center justify-items-center font-mono sm:p-20 sm:items-start">
      <h1 className="text-2xl font-bold mb-6">Tabs example</h1>

      <TabProvider defaultTab="tab1">
        <TabList>
          <Tab id="tab1">Brackets</Tab>
          <Tab id="tab2">Referrals</Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="flex flex-col h-full gap-4" id="tab1">
            <Dropdown />
            <div className="p-4 pb-1 h-full rounded-lg bg-auburn overflow-auto">
              <Table variant="leaderboard" className="shadow-xl">
                <TableHeader variant="leaderboard">
                  <TableRow variant="leaderboard" className="bg-auburn">
                    <TableHeaderCell className="w-12">RANK</TableHeaderCell>
                    <TableHeaderCell className="text-center w-16"></TableHeaderCell>
                    <TableHeaderCell>USERNAME / WALLET</TableHeaderCell>
                    <TableHeaderCell align="right" className="w-36">
                      REFERRALS
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {leaderboardData.map((entry) => (
                    <TableRow
                      key={entry.rank}
                      variant="leaderboard"
                      className="border-b-12 bg-pale-gold hover:bg-pale-gold-light last:border-b-0">
                      <TableCell align="center" className="font-bold text-auburn">{`${entry.rank}.`}</TableCell>
                      <TableCell align="center">
                        <Avatar color={entry.avatarColor} />
                      </TableCell>
                      <TableCell className="font-bold text-auburn uppercase">{entry.username}</TableCell>
                      <TableCell align="right" className="font-bold text-auburn">
                        {entry.referrals.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabPanel>

          <TabPanel className="flex flex-col h-full gap-4" id="tab2">
            <Dropdown />
            <div className="p-4 pb-1 h-full rounded-lg bg-auburn overflow-auto">
              <Table variant="leaderboard" className="shadow-xl">
                <TableHeader variant="leaderboard">
                  <TableRow variant="leaderboard" className="bg-auburn">
                    <TableHeaderCell className="w-12">RANK</TableHeaderCell>
                    <TableHeaderCell className="text-center w-16"></TableHeaderCell>
                    <TableHeaderCell>USERNAME / WALLET</TableHeaderCell>
                    <TableHeaderCell align="right" className="w-36">
                      REFERRALS
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {leaderboardData.map((entry) => (
                    <TableRow
                      key={entry.rank}
                      variant="leaderboard"
                      className="border-b-12 bg-pale-gold hover:bg-pale-gold-light last:border-b-0">
                      <TableCell align="center" className="font-bold text-auburn">{`${entry.rank}.`}</TableCell>
                      <TableCell align="center">
                        <Avatar color={entry.avatarColor} />
                      </TableCell>
                      <TableCell className="font-bold text-auburn uppercase">{entry.username}</TableCell>
                      <TableCell align="right" className="font-bold text-auburn">
                        {entry.referrals.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabPanel>
        </TabPanels>
      </TabProvider>
    </div>
  );
}
