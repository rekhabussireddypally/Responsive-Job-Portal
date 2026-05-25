<<<<<<< HEAD
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

=======
const jobs = [

    {
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Hyderabad",
        type: "Full-Time"
    },

    {
        title: "Backend Developer",
        company: "InnovateX",
        location: "Bangalore",
        type: "Remote"
    },

    {
        title: "UI/UX Intern",
        company: "Design Studio",
        location: "Chennai",
        type: "Internship"
    },

    {
        title: "Java Developer",
        company: "Infosys",
        location: "Hyderabad",
        type: "Full-Time"
    },

    {
        title: "Python Developer",
        company: "Wipro",
        location: "Bangalore",
        type: "Remote"
    }

];

const jobContainer = document.getElementById("jobContainer");

const searchInput = document.getElementById("searchInput");

const locationFilter = document.getElementById("locationFilter");

const typeFilter = document.getElementById("typeFilter");


function displayJobs(jobArray) {

    jobContainer.innerHTML = "";

    if (jobArray.length === 0) {

        jobContainer.innerHTML = "<h3>No jobs found</h3>";

        return;
    }

    jobArray.forEach(job => {

        const card = document.createElement("div");

        card.classList.add("job-card");

        card.innerHTML = `
            <h3>${job.title}</h3>

            <p><strong>Company:</strong> ${job.company}</p>

            <p><strong>Location:</strong> ${job.location}</p>

            <p><strong>Type:</strong> ${job.type}</p>

            <button class="apply-btn"
                    onclick="applyJob('${job.title}')">

                Apply Now

            </button>
        `;

        jobContainer.appendChild(card);

    });
}


function applyJob(title) {

    alert(`Successfully applied for ${title}`);

}


function filterJobs() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedLocation =
        locationFilter.value;

    const selectedType =
        typeFilter.value;


    const filteredJobs = jobs.filter(job => {

        return (

            job.title
                .toLowerCase()
                .includes(searchText)

            &&

            (selectedLocation === ""
                ||
             job.location === selectedLocation)

            &&

            (selectedType === ""
                ||
             job.type === selectedType)

        );

    });

    displayJobs(filteredJobs);

}


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


>>>>>>> c6183beb4fe6c5784bb0197c393bea1c5612e2ed
displayJobs(jobs);