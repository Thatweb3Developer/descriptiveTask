class DescriptiveStatistics {
    // Class method for Mean (Measure of Central Tendency)
    static mean(data) {
      return data.reduce((acc, value) => acc + value, 0) / data.length;
    }
  
    // Class method for Median (Measure of Central Tendency)
    static median(data) {
      const sortedData = [...data].sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      return sortedData.length % 2 === 0
        ? (sortedData[middle - 1] + sortedData[middle]) / 2
        : sortedData[middle];
    }
  
    // Class method for Mode (Measure of Central Tendency)
    static mode(data) {
      const frequencyMap = data.reduce((map, value) => {
        map.set(value, (map.get(value) || 0) + 1);
        return map;
      }, new Map());
  
      let mode;
      let maxFrequency = 0;
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          mode = value;
        }
      });
  
      return mode;
    }
  
    // Class method for Variance (Measure of Dispersion)
    static variance(data) {
      const mean = DescriptiveStatistics.mean(data);
      const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
      const sumSquaredDifferences = squaredDifferences.reduce((acc, value) => acc + value, 0);
  
      return sumSquaredDifferences / data.length;
    }
  
    // Class method for Standard Deviation (Measure of Dispersion)
    static standardDeviation(data) {
      return Math.sqrt(DescriptiveStatistics.variance(data));
    }
  
    // Add more methods for other measures of central tendency and dispersion if needed
  }
  
  // Example usage
  const dataset = [5, 8, 12, 6, 10, 8, 7];
  console.log('Mean:', DescriptiveStatistics.mean(dataset));
  console.log('Median:', DescriptiveStatistics.median(dataset));
  console.log('Mode:', DescriptiveStatistics.mode(dataset));
  console.log('Variance:', DescriptiveStatistics.variance(dataset));
  console.log('Standard Deviation:', DescriptiveStatistics.standardDeviation(dataset));
  