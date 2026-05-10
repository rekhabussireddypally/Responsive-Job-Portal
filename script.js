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


displayJobs(jobs);