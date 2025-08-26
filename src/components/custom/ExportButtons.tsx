"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/computations/sip-calculator";

interface SIPResult {
  totalInvested: number;
  expectedReturns: number;
  maturityAmount: number;
  yearlyData: Array<{
    year: number;
    invested: number;
    value: number;
  }>;
}

interface SIPFormData {
  monthlyAmount: number;
  investmentPeriod: number;
  expectedReturn: number;
  calculationType: 'sip' | 'lumpsum';
}

interface ExportButtonsProps {
  data: SIPResult;
  formData: SIPFormData;
  calculatorType: string;
}

export default function ExportButtons({ data, formData, calculatorType }: ExportButtonsProps) {
  
  const generateCSV = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `SIP-Calculator-Results-${timestamp}.csv`;

    // CSV Header
    let csvContent = "Data Type,Value,Telugu Label\n";
    
    // Input parameters
    csvContent += `Monthly SIP Amount,${formData.monthlyAmount},మాసిక SIP మొత్తం\n`;
    csvContent += `Investment Period,${formData.investmentPeriod} years,పెట్టుబడి కాలం\n`;
    csvContent += `Expected Return,${formData.expectedReturn}%,ఆశించిన రాబడి\n`;
    csvContent += `\n`;
    
    // Results
    csvContent += `Total Invested,${data.totalInvested},మొత్తం పెట్టిన మొత్తం\n`;
    csvContent += `Expected Returns,${data.expectedReturns},అంచనా రాబడి\n`;
    csvContent += `Maturity Amount,${data.maturityAmount},పరిపక్వత మొత్తం\n`;
    csvContent += `\n`;
    
    // Yearly breakdown
    csvContent += `Year,Invested Amount,Total Value,Annual Returns\n`;
    data.yearlyData.forEach(row => {
      const annualReturns = row.value - row.invested;
      csvContent += `${row.year},${row.invested},${row.value},${annualReturns}\n`;
    });

    // Add disclaimer
    csvContent += `\n`;
    csvContent += `Disclaimer,"ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పెట్టుబడి సలహా కాదు.",Educational Purpose Only\n`;
    csvContent += `Generated,${new Date().toISOString()},Generated Date\n`;

    // Create and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track download event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('telemetry-track', {
        detail: {
          event: 'export_download',
          data: {
            calculator: calculatorType,
            exportType: 'csv',
            timestamp: new Date().toISOString()
          }
        }
      }));
    }
  };

  const generatePNG = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const timestamp = new Date().toISOString().slice(0, 10);
      const filename = `SIP-Calculator-Chart-${timestamp}.png`;

      // Find the chart containers
      const resultsElement = document.querySelector('[data-export="results"]') || 
                            document.querySelector('.recharts-responsive-container')?.parentElement;
      
      if (resultsElement) {
        // Create a temporary container with better styling for export
        const exportContainer = document.createElement('div');
        exportContainer.style.padding = '20px';
        exportContainer.style.backgroundColor = 'white';
        exportContainer.style.fontFamily = 'Arial, sans-serif';
        exportContainer.style.width = '800px';
        
        // Add title
        const title = document.createElement('h2');
        title.textContent = 'SIP కాలిక్యులేటర్ ఫలితాలు';
        title.style.textAlign = 'center';
        title.style.marginBottom = '20px';
        title.style.color = '#1f2937';
        exportContainer.appendChild(title);

        // Add input summary
        const inputSummary = document.createElement('div');
        inputSummary.style.marginBottom = '20px';
        inputSummary.style.padding = '15px';
        inputSummary.style.backgroundColor = '#f9fafb';
        inputSummary.style.borderRadius = '8px';
        inputSummary.innerHTML = `
          <h3 style="margin: 0 0 10px 0; color: #374151;">ఇన్‌పుట్ వివరాలు:</h3>
          <p style="margin: 5px 0;">మాసిక SIP మొత్తం: ${formatCurrency(formData.monthlyAmount)}</p>
          <p style="margin: 5px 0;">పెట్టుబడి కాలం: ${formData.investmentPeriod} సంవత్సరాలు</p>
          <p style="margin: 5px 0;">ఆశించిన వార్షిక రాబడి: ${formData.expectedReturn}%</p>
        `;
        exportContainer.appendChild(inputSummary);

        // Add results summary
        const resultsSummary = document.createElement('div');
        resultsSummary.style.marginBottom = '20px';
        resultsSummary.style.padding = '15px';
        resultsSummary.style.backgroundColor = '#eff6ff';
        resultsSummary.style.borderRadius = '8px';
        resultsSummary.innerHTML = `
          <h3 style="margin: 0 0 10px 0; color: #1d4ed8;">ఫలితాల సారాంశం:</h3>
          <p style="margin: 5px 0;"><strong>మీ పెట్టుబడి:</strong> ${formatCurrency(data.totalInvested)}</p>
          <p style="margin: 5px 0;"><strong>అంచనా రాబడి:</strong> ${formatCurrency(data.expectedReturns)}</p>
          <p style="margin: 5px 0;"><strong>మొత్తం మొత్తం:</strong> ${formatCurrency(data.maturityAmount)}</p>
        `;
        exportContainer.appendChild(resultsSummary);

        // Clone and add the chart
        const chartClone = resultsElement.cloneNode(true) as HTMLElement;
        chartClone.style.marginBottom = '20px';
        exportContainer.appendChild(chartClone);

        // Add disclaimer
        const disclaimer = document.createElement('div');
        disclaimer.style.padding = '15px';
        disclaimer.style.backgroundColor = '#fef3c7';
        disclaimer.style.borderRadius = '8px';
        disclaimer.style.fontSize = '12px';
        disclaimer.style.color = '#92400e';
        disclaimer.style.textAlign = 'center';
        disclaimer.textContent = 'ఈ లెక్కింపు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఫలితాలు అంచనాలు మాత్రమే, పెట్టుబడి సలహా కాదు.';
        exportContainer.appendChild(disclaimer);

        // Temporarily add to DOM
        exportContainer.style.position = 'absolute';
        exportContainer.style.left = '-9999px';
        document.body.appendChild(exportContainer);

        // Generate canvas and download
        const canvas = await html2canvas(exportContainer, {
          backgroundColor: 'white',
          scale: 2,
          useCORS: true,
          allowTaint: true
        });

        // Remove temporary element
        document.body.removeChild(exportContainer);

        // Download PNG
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Track download event
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('telemetry-track', {
            detail: {
              event: 'export_download',
              data: {
                calculator: calculatorType,
                exportType: 'png',
                timestamp: new Date().toISOString()
              }
            }
          }));
        }
      } else {
        throw new Error('Chart element not found');
      }
    } catch (error) {
      console.error('PNG export failed:', error);
      alert('PNG డౌన్‌లోడ్‌లో సమస్య వచ్చింది. దయచేసి మళ్లీ ప్రయత్నించండి.');
    }
  };

  return (
    <Card data-export="results">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ఫలితాలను డౌన్‌లోడ్ చేయండి
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              మీ SIP కాలిక్యులేటర్ ఫలితాలను CSV లేదా PNG ఫార్మాట్‌లో సేవ్ చేయండి
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={generateCSV}
              variant="outline"
              className="flex items-center gap-2 bg-green-50 border-green-200 hover:bg-green-100 text-green-800"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CSV డౌన్‌లోడ్
            </Button>

            <Button
              onClick={generatePNG}
              variant="outline"
              className="flex items-center gap-2 bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-800"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              PNG డౌన్‌లోడ్
            </Button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">
            <strong>CSV:</strong> డేటా విశ్లేషణ మరియు Excel లో ఉపయోగించడానికి • 
            <strong> PNG:</strong> ప్రెజెంటేషన్లు మరియు రిపోర్ట్‌లకు అనుకూలం
          </p>
        </div>
      </CardContent>
    </Card>
  );
}