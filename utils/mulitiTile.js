// Generate sample data
export const generateMultiLineData = (numPoints) => {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push(Math.random() * 500);
  }
  return data;
};

// Generate labels for the chart
export const generateMultiLineLabels = (numPoints) => {
  const labels = [];
  for (let i = 0; i < numPoints; i++) {
    labels.push(`Week ${i}`);
  }
  return labels;
};
