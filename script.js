const jobs = [

    {
        title: "Frontend Developer",
        company: "Infosys",
        location: "Hyderabad",
        type: "Full-Time",
        salary: "₹6 LPA"
    },

    {
        title: "Backend Developer",
        company: "TCS",
        location: "Bangalore",
        type: "Full-Time",
        salary: "₹7 LPA"
    },

    {
        title: "UI/UX Designer",
        company: "Wipro",
        location: "Chennai",
        type: "Internship",
        salary: "₹25,000/month"
    },

    {
        title: "Python Developer",
        company: "Accenture",
        location: "Remote",
        type: "Remote",
        salary: "₹8 LPA"
    },

    {
        title: "React Developer",
        company: "Capgemini",
        location: "Hyderabad",
        type: "Full-Time",
        salary: "₹7.5 LPA"
    },

    {
        title: "Data Analyst",
        company: "Cognizant",
        location: "Bangalore",
        type: "Internship",
        salary: "₹30,000/month"
    }

];

const jobContainer = document.getElementById("jobContainer");

const searchInput = document.getElementById("searchInput");

const locationFilter = document.getElementById("locationFilter");

const typeFilter = document.getElementById("typeFilter");

const jobCount = document.getElementById("jobCount");

/* Display Jobs */

function displayJobs(filteredJobs) {

    jobContainer.innerHTML = "";

    jobCount.innerText =
        `${filteredJobs.length} Jobs Available`;

    if (filteredJobs.length === 0) {

        jobContainer.innerHTML = `
            <p class="no-jobs">
                No jobs found matching your search.
            </p>
        `;

        return;
    }

    filteredJobs.forEach(job => {

        const jobCard = document.createElement("div");

        jobCard.classList.add("job-card");

        jobCard.innerHTML = `

            <h3>${job.title}</h3>

            <p><strong>Company:</strong> ${job.company}</p>

            <p><strong>Location:</strong> ${job.location}</p>

            <p><strong>Job Type:</strong> ${job.type}</p>

            <p><strong>Salary:</strong> ${job.salary}</p>

            <button class="apply-btn">
                Apply Now
            </button>

        `;

        jobContainer.appendChild(jobCard);

    });
}

/* Filter Jobs */

function filterJobs() {

    const searchValue =
        searchInput.value.toLowerCase();

    const selectedLocation =
        locationFilter.value;

    const selectedType =
        typeFilter.value;

    const filteredJobs = jobs.filter(job => {

        const matchesSearch =
            job.title.toLowerCase()
            .includes(searchValue);

        const matchesLocation =
            selectedLocation === "" ||
            job.location === selectedLocation;

        const matchesType =
            selectedType === "" ||
            job.type === selectedType;

        return (
            matchesSearch &&
            matchesLocation &&
            matchesType
        );
    });

    displayJobs(filteredJobs);
}

/* Event Listeners */

searchInput.addEventListener(
    "input",
    filterJobs
);

locationFilter.addEventListener(
    "change",
    filterJobs
);

typeFilter.addEventListener(
    "change",
    filterJobs
);

/* Initial Display */

displayJobs(jobs);