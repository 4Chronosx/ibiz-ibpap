/*

result JSON format

{
    businessName: "",
    location: "",
    businessDescription: "",
    summary: {
      overallRating: "",
      verdict: "",
      overview: [
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" }
      ],
      keyFindings: [""]
    },
    category: {
      productService: {
        rating: "",
        summary: "",
        verdict: "",
        strengths: [""],
        risks: [""],
        suggestions: [""]
      },
      market: {
        rating: "",
        summary: "",
        verdict: "",
        competitors: [{ name: "", shortDescription: "", link: "" }],
        suggestions: [""]
      },
      organizational: {
        rating: "",
        summary: "",
        verdict: "",
        strengths: [""],
        risks: [""],
        suggestions: [""]
      },
      financial: {
        rating: "",
        summary: "",
        verdict: "",
        startupCapital: "",
        monthlyRevenueRange: ["", ""],
        breakevenMonths: ["", ""],
        suggestions: [""]
      }
    }
  }

*/

import { useState } from "react";
import Feasibility from "../../components/Feasibility/Feasibility";


function FeasibilityPage() {

  const [result, setResult] = useState({
    businessName: "",
    location: "",
    businessDescription: "",
    summary: {
      overallRating: "",
      verdict: "",
      overview: [
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" }
      ],
      keyFindings: [""]
    },
    category: {
      productService: {
        rating: "",
        summary: "",
        verdict: "",
        strengths: [""],
        risks: [""],
        suggestions: [""]
      },
      market: {
        rating: "",
        summary: "",
        verdict: "",
        competitors: [{ name: "", shortDescription: "", link: "" }],
        suggestions: [""]
      },
      organizational: {
        rating: "",
        summary: "",
        verdict: "",
        strengths: [""],
        risks: [""],
        suggestions: [""]
      },
      financial: {
        rating: "",
        summary: "",
        verdict: "",
        startupCapital: "",
        monthlyRevenueRange: ["", ""],
        breakevenMonths: ["", ""],
        suggestions: [""]
      }
    }
  });


  const handleSubmit = async() => {

    const message = `
    1. What is your business idea?
        I want to create a mobile laundry pickup and delivery service in Cebu City. Customers can book via an app, and we’ll pick up, wash, and return clothes within 24–48 hours.
    2. Who are your target customers?
        Busy professionals and working students living in apartments or condos in Cebu. They don’t have time or space to do laundry.
    3. What makes you or your team capable of running this business?
        I have a logistics background, and my cousin owns a laundromat we can partner with. I also have some experience working on mobile app development projects.
    4. How much are you willing to spend to start, and how will you make money?
        I can invest around ₱100,000 initially. I plan to charge ₱150 per load, with optional express service for an extra ₱50. I expect around 10–20 orders per day once we’re up and running.
    5. Is there anything else the AI should consider?
        I want this to be eco-friendly by using biodegradable laundry products. I’m also hoping it creates job opportunities for riders.
    
    `;

    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: message})
      });

      let data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.log('Error: ', error);
    }
    
  }



  return (
    <>
    <Feasibility></Feasibility>
    </>
  );
}


export default FeasibilityPage;