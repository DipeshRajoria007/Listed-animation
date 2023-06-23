export const generatePieChartData = (numDataPoints) => {
  const data = [];
  for (let i = 0; i < numDataPoints; i++) {
    data.push(Math.random() * 100);
  }
  return data;
};

// Generate labels for the chart
export const generatePieChartLabels = (numDataPoints) => {
  const labels = ["Basic Tees", "Custom Short Pants", "Super Hoodies"];
  //   for (let i = 0; i < numDataPoints; i++) {
  //     labels.push(`Item ${i + 1}`);
  //   }
  return labels;
};
