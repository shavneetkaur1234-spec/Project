import React from 'react'
import {Bookmark} from 'lucide-react'
import Card1 from './components/Card1'

const App = () => {

    const jobOpenings = [
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?pid=Api&P=0&h=180",
    companyName: "Google",
    datePosted: "5 days ago",
    posts: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.1yU4mL8LrMt-JZzi54NicwHaDt?pid=Api&P=0&h=180",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    posts: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.moSCocxuD-WLoRTCzZm-8wHaGO?pid=Api&P=0&h=180",
    companyName: "Amazon",
    datePosted: "10 days ago",
    posts: "Backend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.2h59bgQvwOngZkZ2h2xFGQHaEO?pid=Api&P=0&h=180",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    posts: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.Tltt2QmBAxqByzclDP9hpAHaHa?pid=Api&P=0&h=180",
    companyName: "Spotify",
    datePosted: "1 week ago",
    posts: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "4 days ago",
    posts: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.aQ2HNoPySMJSsaheYf6WkgHaHa?pid=Api&P=0&h=180",
    companyName: "Uber",
    datePosted: "6 days ago",
    posts: "Data Analyst",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.AkKVWkjzwnxK7k_L-G1IYQHaEK?pid=Api&P=0&h=180",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    posts: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.BYGIZ8dQ7adWF4ikOIsXJwHaFX?pid=Api&P=0&h=180",
    companyName: "Tesla",
    datePosted: "2 days ago",
    posts: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.GpUL0at1rQkoDOwQFprAKgHaEK?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "10 weeks ago",
    posts: "AI/ML Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "India"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){


        return <div key={idx}>
        <Card1 
        company={elem.companyName}
        posts={elem.posts}
        tag1={elem.tag1}
        tag2={elem.tag2}
        pay={elem.pay}
        location={elem.location}
        brandLogo={elem.brandLogo}
        datePosted={elem.datePosted}
        />
        </div>
      })}
    </div>
  )
}

export default App
