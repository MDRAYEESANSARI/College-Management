let attendanceChart;

// Expanded static data with more dates and subjects
const staticData = {
  "CSE": [
    { date: '2024-07-01', percentage: 85 },
    { date: '2024-07-02', percentage: 8 },
    { date: '2024-07-03', percentage: 80 },
    { date: '2024-07-04', percentage: 78 },
    { date: '2024-07-05', percentage: 90 }
  ],
  "AIML": [
    { date: '2024-07-01', percentage: 78 },
    { date: '2024-07-02', percentage: 7 },
    { date: '2024-07-03', percentage: 70 },
    { date: '2024-07-04', percentage: 73 },
    { date: '2024-07-05', percentage: 77 }
  ],
  "DS": [
    { date: '2024-07-01', percentage: 90 },
    { date: '2024-07-02', percentage: 8 },
    { date: '2024-07-03', percentage: 92 },
    { date: '2024-07-04', percentage: 85 },
    { date: '2024-07-05', percentage: 87 }
  ],
  "Maths": [
    { date: '2024-07-01', percentage: 75 },
    { date: '2024-07-02', percentage: 8 },
    { date: '2024-07-03', percentage: 78 },
    { date: '2024-07-04', percentage: 82 },
    { date: '2024-07-05', percentage: 77 }
  ],
  "Physics": [
    { date: '2024-07-01', percentage: 88 },
    { date: '2024-07-02', percentage: 8 },
    { date: '2024-07-03', percentage: 90 },
    { date: '2024-07-04', percentage: 83 },
    { date: '2024-07-05', percentage: 86 }
  ]
};

const initializeChart = () => {
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  attendanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // Will be filled dynamically
      datasets: [{
        label: 'Attendance Percentage',
        data: [], // Will be filled dynamically
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1500, // Animation duration in ms
        easing: 'easeInOutQuad' // Animation easing function
      },
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Date'
          },
          grid: {
            display: false // Hide grid lines for x-axis
          }
        },
        y: {
          beginAtZero: true,
          min: 0,
          max: 100,
          title: {
            display: true,
            text: 'Attendance Percentage (%)'
          },
          grid: {
            color: 'rgba(75, 192, 192, 0.2)' // Light grid line color
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#333' // Legend label color
          }
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `Attendance: ${tooltipItem.raw}%`;
            }
          }
        }
      }
    }
  });
};

const updateChart = (subject) => {
  const data = staticData[subject] || [];
  
  const labels = data.map(entry => entry.date);
  const percentages = data.map(entry => entry.percentage);

  attendanceChart.data.labels = labels;
  attendanceChart.data.datasets[0].data = percentages;
  attendanceChart.update();
};

document.getElementById("subject").addEventListener("change", (event) => {
  const selectedSubject = event.target.value;
  if (selectedSubject) {
    updateChart(selectedSubject);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  initializeChart();
  // Optionally set a default subject or static data
  updateChart("CSE"); // Example: Default to CSE data
});
