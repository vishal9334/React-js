import "./App.css";
import Card from "./components/Card";


function App() {
  const jobOpening  = [
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    jobType: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-logo.svg",
    companyName: "Google",
    posted: "2 days ago",
    position: "Frontend Developer",
    jobType: "Full Time",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Bangalore, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_logo.svg",
    companyName: "Microsoft",
    posted: "1 day ago",
    position: "Backend Developer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    posted: "3 days ago",
    position: "UI Designer",
    jobType: "Part Time",
    level: "Junior Level",
    salary: "$70/hr",
    location: "Pune, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Adobe_Systems_logo_and_wordmark.svg",
    companyName: "Adobe",
    posted: "4 days ago",
    position: "Graphic Designer",
    jobType: "Full Time",
    level: "Mid Level",
    salary: "$80/hr",
    location: "Chennai, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    posted: "6 days ago",
    position: "Product Designer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "$100/hr",
    location: "Gurgaon, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/1/19/IBM_logo.svg",
    companyName: "IBM",
    posted: "7 days ago",
    position: "Software Engineer",
    jobType: "Part Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Noida, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/5/51/LinkedIn_Logo.svg",
    companyName: "LinkedIn",
    posted: "2 days ago",
    position: "Full Stack Developer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "$105/hr",
    location: "Bangalore, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/2/20/Twitter_logo.svg",
    companyName: "Twitter",
    posted: "1 day ago",
    position: "Mobile App Developer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "$85/hr",
    location: "Mumbai, India",
    button: "Apply Now",
  },
  {
    company: "https://upload.wikimedia.org/wikipedia/commons/7/76/Spotify_logo_with_text.svg",
    companyName: "Spotify",
    posted: "5 days ago",
    position: "UI/UX Intern",
    jobType: "Internship",
    level: "Intern",
    salary: "$50/hr",
    location: "Bangalore, India",
    button: "Apply Now",
  },
];


  return (
    <div className="parent">
      {jobOpening.map((elem, index) => (
        <Card
          key={index}           
          company={elem.company} 
          companyName={elem.companyName} 
          posted = {elem.posted}
          position={elem.position}
          jobType={elem.jobType}
          level={elem.level}
          salary={elem.salary}
          location={elem.location}
          button={elem.button}
        />
      ))}
    </div>
  );
}

export default App;
