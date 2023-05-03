
// JS FOR SUPERVISOR START
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const customer = document.getElementsByClassName('customer');

// alert(customer);
// customer.style.display = "none";

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
			

		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

var options = {
	series: [
	  {
		name: "Net Profit",
		data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
	  },
	  {
		name: "Revenue",
		data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
	  },
	  {
		name: "Free Cash Flow",
		data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
	  },
	],
	chart: {
	  type: "bar",
	  height: 250, // make this 250
	  sparkline: {
		enabled: true, // make this true
	  },
	},
	plotOptions: {
	  bar: {
		horizontal: false,
		columnWidth: "55%",
		endingShape: "rounded",
	  },
	},
	dataLabels: {
	  enabled: false,
	},
	stroke: {
	  show: true,
	  width: 2,
	  colors: ["transparent"],
	},
	xaxis: {
	  categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
	},
	yaxis: {
	  title: {
		text: "$ (thousands)",
	  },
	},
	fill: {
	  opacity: 1,
	},
	tooltip: {
	  y: {
		formatter: function (val) {
		  return "$ " + val + " thousands";
		},
	  },
	},
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  
//   var chart = new ApexCharts(document.querySelector("#apex1"), options);
//   chart.render();
  
// JS FOR SUPERVISOR END