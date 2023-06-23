import { DASHBOARD_STATS } from "@/app/dashboard/constants";
import { NextResponse } from "next/server";
import {
  generatePieChartData,
  generatePieChartLabels,
} from "../../../../utils/pieTile";
import {
  generateMultiLineData,
  generateMultiLineLabels,
} from "../../../../utils/mulitiTile";

export async function GET() {
  // generating Dummy Data for Dashboard
  const data = {};
  data.stats = {
    [DASHBOARD_STATS[0].id]: "$2,129,430",
    [DASHBOARD_STATS[1].id]: "1,520",
    [DASHBOARD_STATS[2].id]: "9,721",
    [DASHBOARD_STATS[3].id]: "892",
  };

  const numPoints = 4;
  const multiLineData = {
    labels: generateMultiLineLabels(numPoints),
    datasets: [
      {
        label: "Guest",
        data: generateMultiLineData(numPoints),
        borderColor: "#E9A0A0",
        backgroundColor: "transparent",
        cubicInterpolationMode: "monotone",
      },
      {
        label: "User",
        data: generateMultiLineData(numPoints),
        borderColor: "#9BDD7C",
        backgroundColor: "transparent",
        cubicInterpolationMode: "monotone",
      },
      // Add more datasets as needed
    ],
  };

  const numDataPoints = 3; // Number of data points

  const pieChartData = {
    labels: generatePieChartLabels(numDataPoints),
    datasets: [
      {
        data: generatePieChartData(numDataPoints),
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      },
    ],
  };

  const meetingData = [
    {
      title: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
      isPast: true,
    },
    {
      title: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "at Central Jakarta ",
      isPast: false,
    },
  ];

  data.multiLineData = multiLineData;
  data.pieChartData = pieChartData;
  data.meetingData = meetingData;

  return NextResponse.json(data);
}
