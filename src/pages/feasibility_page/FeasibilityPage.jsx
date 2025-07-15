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

  const location = useLocation();
  const { userData } = location.state || {}; 
  const navigate = useNavigate();

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

  const generateBusPdf = async() => {

  }


  const handleSubmit = async() => {

  

    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: userData})
      });

      let data = await response.json();
      console.log(data);
      setResult(data);
      
    } catch (error) {
      console.log('Error: ', error);
    }
    
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
    <Feasibility genPdf={generateBusPdf} handleSumbmit={handleSubmit} result={result}></Feasibility>
    </>
  );
}


export default FeasibilityPage;