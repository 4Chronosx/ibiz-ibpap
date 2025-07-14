/*
PROMPT

`You are an API. Return ONLY a valid JSON object with this structure. Do NOT include any text or code fences outside the JSON.

    The JSON must follow this template, with descriptive keys and realistic data based on the user message:

    {
      "executiveSummary": {
        "summary": "string"
      },
      "businessDescription": {
        "missionStatement": "string",
        "visionStatement": "string",
        "companyOverview": "string",
        "businessStructure": "string",
        "productsAndServices": ["string"],
        "targetMarket": "string",
        "competitiveAdvantage": "string"
      },
      "marketAnalysis": {
        "industryOverview": "string",
        "targetMarketAnalysis": "string",
        "marketTrends": ["string"],
        "marketSizeAndGrowthPotential": "string"
      },
      "marketingAndSalesStrategy": {
        "brandingAndPositioning": "string",
        "pricingStrategy": "string",
        "distributionChannels": ["string"],
        "promotionalActivities": ["string"],
        "salesForecast": {"year1": number, "year2": number, "year3": number}
      },
      "financialProjections": {
        "salesForecast": {"year1": number, "year2": number, "year3": number},
        "projectedExpenses": {"year1": number, "year2": number, "year3": number},
        "profitAndLossStatement": {"year1": number, "year2": number, "year3": number},
        "cashFlowStatement": {"year1": number, "year2": number, "year3": number},
        "breakEvenAnalysis": {"breakEvenMonth": number, "breakEvenRevenue": number},
        "keyFinancialRatios": {"grossMargin": "string", "netMargin": "string", "currentRatio": "string"}
      },
      "implementationPlan": {
        "resourceAllocation": {"development": "string", "marketing": "string", "operations": "string"},
        "riskAssessmentAndMitigation": [{"risk": "string", "mitigation": "string"}],
        "exitStrategy": "string"
      },
    }

    Fill each section with realistic data based on the user message. Keys must closely follow the section titles. Do NOT include any text outside the JSON. Here is the user message:
    "${message}"`


    PROMPT FOR USER

    `You are an API. Return ONLY a valid JSON object with this structure. Do NOT include any text or code fences outside the JSON:
                        {
                            "businessName": "string",
                            "location": "string",
                            "businessDescription": "string",
                            "summary": {
                                "overallRating": number,
                                "verdict": "string",
                                "overview": [
                                {
                                    "category": "Products/Service",
                                    "rating": number,
                                    "summary": "string"
                                },
                                {
                                    "category": "Market",
                                    "rating": number,
                                    "summary": "string"
                                },
                                {
                                    "category": "Organization",
                                    "rating": number,
                                    "summary": "string"
                                },
                                {
                                    "category": "Finance",
                                    "rating": number,
                                    "summary": "string"
                                }
                                ],
                                "keyFindings": ["string"]
                            },

                            "category": {
                                "productService": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "strengths": ["string"],
                                "risks": ["string"],
                                "suggestions": ["string"]
                                },
                                "market": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "competitors": [
                                    {
                                    "name": "string",
                                    "shortDescription": "string",
                                    "link": "string"
                                    }
                                ],
                                "suggestions": ["string"]
                                },
                                "organizational": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "strengths": ["string"],
                                "risks": ["string"],
                                "suggestions": ["string"]
                                },
                                "financial": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "startupCapital": "string-number",
                                "monthlyRevenueRange": ["string-number", "string-number"],
                                "breakevenMonths": ["string-number", "string-number"],
                                "suggestions": ["string"]
                                }
                            },
                        }

                        RULES:

                        1. Ratings should be only x.xx/10 .
                        2. Verdicts are ["Less Feasible", "Moderately Feasible", "Highly Feasible"].
                        3. When dealing with large numbers, format with comma when necessary.
                        4. For key findings, strengths, and risks, and suggestions, they should have at least 3 bullet points and each bullet should be at least 70 words.
                        5. businessDescription should be 100-150 words.

                        Do NOT include any text outside the JSON. Here is the user message:
                        "${message}"`;

*/