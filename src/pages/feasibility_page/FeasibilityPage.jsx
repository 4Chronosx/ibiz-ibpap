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
import jspdf from "jspdf";
import { useNavigate } from "react-router-dom";



function FeasibilityPage() {
  const navigate = useNavigate();
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
  // State for PDF loading/progress
  const [pdfLoading, setPdfLoading] = useState(false);``
  const [pdfProgress, setPdfProgress] = useState(0);

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

  // Helper to download PDF
  const downloadPDF = (doc, filename = "business-plan.pdf") => {
    doc.save(filename);
  };

  const generateBusinessPlanPDF = async () => {
    setPdfLoading(true);
    setPdfProgress(0);
    const interval = setInterval(() => {
      setPdfProgress((prev) => {
        if (prev < 90) return prev + 1;
        else return prev;
      });
    }, 200);
    try {
      // Call the business plan API
      const response = await fetch('http://localhost:3000/business-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
      });

      if (!response.ok) throw new Error('Failed to get business plan');

      const data = await response.json();
      const plan = data.reply;

      // Create PDF
      const doc = new jsPDF();

      // COVER PAGE
      // Helper to wrap and print text
      const printWrappedText = (text, x, y, fontSize = 11, fontStyle = "normal", lineHeight = 6, maxWidth = 180) => {
        doc.setFontSize(fontSize);
        doc.setFont("courier", fontStyle);
        const lines = doc.splitTextToSize(text, maxWidth);
        lines.forEach(line => {
          doc.text(line, x, y);
          y += lineHeight;
        });
        return y;
      };

      // COVER PAGE
      doc.setFontSize(22);
      doc.setFont("courier", "bold");
      doc.text(result?.businessName || plan.executiveSummary?.businessName || "Business Name", 105, 60, { align: "center" });
      doc.setFontSize(12);
      doc.setFont("courier", "normal");
      doc.text("BUSINESS PLAN", 105, 75, { align: "center" });
      doc.setFontSize(16);
      doc.setFont("courier", "bold");
      doc.text(plan.executiveSummary?.location || "Location", 105, 130, { align: "center" });

      // EXECUTIVE SUMMARY PAGE
      doc.addPage();
      let y = 25;
      doc.setFontSize(14);
      doc.setFont("courier", "bold");
      doc.text("01 - Executive Summary", 15, y);
      doc.setLineWidth(0.5);
      doc.line(15, y + 2, 195, y + 2);
      y += 12;
      y = printWrappedText(plan.executiveSummary?.summary || "", 15, y);

      // BUSINESS DESCRIPTION PAGE
      doc.addPage();
      y = 25;
      doc.setFontSize(14);
      doc.setFont("courier", "bold");
      doc.text("02 - Business Description", 15, y);
      doc.setLineWidth(0.5);
      doc.line(15, y + 2, 195, y + 2);
      y += 12;
      doc.setFontSize(11);
      doc.setFont("courier", "bold");
      doc.text("Mission Statement", 15, y);
      y = printWrappedText(plan.businessDescription?.missionStatement || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Vision Statement", 15, y);
      y = printWrappedText(plan.businessDescription?.visionStatement || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Company Overview", 15, y);
      y = printWrappedText(plan.businessDescription?.companyOverview || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Business Structure", 15, y);
      y = printWrappedText(plan.businessDescription?.businessStructure || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Products & Services", 15, y);
      y = printWrappedText(Array.isArray(plan.businessDescription?.productsAndServices) ? plan.businessDescription.productsAndServices.join(", ") : plan.businessDescription?.productsAndServices || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Target Market", 15, y);
      y = printWrappedText(plan.businessDescription?.targetMarket || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Competitive Advantage", 15, y);
      y = printWrappedText(plan.businessDescription?.competitiveAdvantage || "", 15, y + 6);

      // MARKET ANALYSIS PAGE
      doc.addPage();
      y = 25;
      doc.setFontSize(14);
      doc.setFont("courier", "bold");
      doc.text("03 - Market Analysis", 15, y);
      doc.setLineWidth(0.5);
      doc.line(15, y + 2, 195, y + 2);
      y += 12;
      doc.setFontSize(11);
      doc.setFont("courier", "bold");
      doc.text("Industry Overview", 15, y);
      y = printWrappedText(plan.marketAnalysis?.industryOverview || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Target Market Analysis", 15, y);
      y = printWrappedText(plan.marketAnalysis?.targetMarketAnalysis || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Market Trends", 15, y);
      y = printWrappedText(Array.isArray(plan.marketAnalysis?.marketTrends) ? plan.marketAnalysis.marketTrends.join(", ") : plan.marketAnalysis?.marketTrends || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Market Size & Growth Potential", 15, y);
      y = printWrappedText(plan.marketAnalysis?.marketSizeAndGrowthPotential || "", 15, y + 6);

      // MARKETING & SALES STRATEGY PAGE
      doc.addPage();
      y = 25;
      doc.setFontSize(14);
      doc.setFont("courier", "bold");
      doc.text("04 - Marketing & Sales Strategy", 15, y);
      doc.setLineWidth(0.5);
      doc.line(15, y + 2, 195, y + 2);
      y += 12;
      doc.setFontSize(11);
      doc.setFont("courier", "bold");
      doc.text("Branding & Positioning", 15, y);
      y = printWrappedText(plan.marketingAndSalesStrategy?.brandingAndPositioning || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Pricing Strategy", 15, y);
      y = printWrappedText(plan.marketingAndSalesStrategy?.pricingStrategy || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Promotional Activities", 15, y);
      y = printWrappedText(Array.isArray(plan.marketingAndSalesStrategy?.promotionalActivities) ? plan.marketingAndSalesStrategy.promotionalActivities.join(", ") : plan.marketingAndSalesStrategy?.promotionalActivities || "", 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Sales Forecast", 15, y);
      y = printWrappedText(`Year1: ${plan.marketingAndSalesStrategy?.salesForecast?.year1 || ""}\nYear2: ${plan.marketingAndSalesStrategy?.salesForecast?.year2 || ""}\nYear3: ${plan.marketingAndSalesStrategy?.salesForecast?.year3 || ""}`, 15, y + 6);

      // FINANCIAL PROJECTIONS PAGE
      doc.addPage();
      y = 25;
      doc.setFontSize(14);
      doc.setFont("courier", "bold");
      doc.text("05 - Financial Projections", 15, y);
      doc.setLineWidth(0.5);
      doc.line(15, y + 2, 195, y + 2);
      y += 12;
      doc.setFontSize(11);
      doc.setFont("courier", "bold");
      doc.text("Sales Forecast", 15, y);
      y = printWrappedText(`Year1: ${plan.financialProjections?.salesForecast?.year1 || ""}\nYear2: ${plan.financialProjections?.salesForecast?.year2 || ""}\nYear3: ${plan.financialProjections?.salesForecast?.year3 || ""}`, 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Projected Expenses", 15, y);
      y = printWrappedText(`Year1: ${plan.financialProjections?.projectedExpenses?.year1 || ""}\nYear2: ${plan.financialProjections?.projectedExpenses?.year2 || ""}\nYear3: ${plan.financialProjections?.projectedExpenses?.year3 || ""}`, 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Profit & Loss Statement", 15, y);
      y = printWrappedText(`Year1: ${plan.financialProjections?.profitAndLossStatement?.year1 || ""}\nYear2: ${plan.financialProjections?.profitAndLossStatement?.year2 || ""}\nYear3: ${plan.financialProjections?.profitAndLossStatement?.year3 || ""}`, 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Cash Flow Statement", 15, y);
      y = printWrappedText(`Year1: ${plan.financialProjections?.cashFlowStatement?.year1 || ""}\nYear2: ${plan.financialProjections?.cashFlowStatement?.year2 || ""}\nYear3: ${plan.financialProjections?.cashFlowStatement?.year3 || ""}`, 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Break Even Analysis", 15, y);
      y = printWrappedText(`Break Even Month: ${plan.financialProjections?.breakEvenAnalysis?.breakEvenMonth || ""}\nBreak Even Revenue: ${plan.financialProjections?.breakEvenAnalysis?.breakEvenRevenue || ""}`, 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Key Financial Ratios", 15, y);
      y = printWrappedText(`Gross Margin: ${plan.financialProjections?.keyFinancialRatios?.grossMargin || ""}\nNet Margin: ${plan.financialProjections?.keyFinancialRatios?.netMargin || ""}\nCurrent Ratio: ${plan.financialProjections?.keyFinancialRatios?.currentRatio || ""}`, 15, y + 6);

      // IMPLEMENTATION PLAN PAGE
      doc.addPage();
      y = 25;
      doc.setFontSize(14);
      doc.setFont("courier", "bold");
      doc.text("06 - Implementation Plan", 15, y);
      doc.setLineWidth(0.5);
      doc.line(15, y + 2, 195, y + 2);
      y += 12;
      doc.setFontSize(11);
      doc.setFont("courier", "bold");
      doc.text("Resource Allocation", 15, y);
      y = printWrappedText(`Development: ${plan.implementationPlan?.resourceAllocation?.development || ""}\nMarketing: ${plan.implementationPlan?.resourceAllocation?.marketing || ""}\nOperations: ${plan.implementationPlan?.resourceAllocation?.operations || ""}`, 15, y + 6);
      doc.setFont("courier", "bold");
      doc.text("Exit Strategy", 15, y);
      y = printWrappedText(plan.implementationPlan?.exitStrategy || "", 15, y + 6);

      // Instead of saving/downloading, create a Blob and pass its URL to /home
      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);

      clearInterval(interval);
      setPdfProgress(100);
      setTimeout(() => {
        setPdfLoading(false);
        setPdfProgress(0);
        navigate('/home', { state: { feasibilityReport: result, businessPlanPdfUrl: pdfUrl } });
      }, 1000);
    } catch (err) {
      clearInterval(interval);
      setPdfLoading(false);
      setPdfProgress(0);
      console.error(err);
      alert("Failed to generate business plan PDF.");
    }
  };


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