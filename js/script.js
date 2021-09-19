// JavaScript Document

//Alert Banner
const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
    `
    <div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
      <p class="alert-banner-close">x</p>
    </div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});



//Alert Bubble - removes the bubble if the alert banner is closed
const alertBubble = document.getElementById("bell-notification");
// create the html for the banner
alertBubble.innerHTML =
    `
    <div class="alert-bubble">
    </div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBubble.style.display = "none"
    }
});




//Chart
const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"
    ],
    datasets: [{
        label: 'Dataset',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500
        ],
        borderColor: '#7477bf',
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        fill: 'origin',
        tension: .4,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});




// Bar Chart
const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});




// Donut Chart 
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            "#7477bf",
            "#81c98f",
            "#51b6c8"
        ]
    }]
};
const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});




// Form Submit //
document.getElementById("send").onclick = function() {
    validateForm()
};

function validateForm() {
    let x = document.forms["myForm"]["userField"].value;
    let y = document.forms["myForm"]["messageField"].value;
    if (x == "") {
        alert("Must input User Name");
        return false;
    } else {
        if (y == "") {
            alert("Must input Message... duh!!");
            return false;
        } else {
            alert("Many Thanks!!");
        }
    }
};