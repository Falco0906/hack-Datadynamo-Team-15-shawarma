import { Brain, Sparkles } from 'lucide-react'

function ExecutiveSummary({ summary, loading }) {
  const formatSummaryContent = (text) => {
    if (!text) return null
    
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim()
      
      if (!trimmedLine) {
        return <div key={index} style={{ height: '8px' }} />
      }
      
      // Critical/Warning lines
      const criticalWords = ['CRITICAL', 'HIGH RISK', 'IMMEDIATE', 'URGENT', '⚠️', 'WARNING']
      for (const word of criticalWords) {
        if (trimmedLine.includes(word)) {
          return (
            <p key={index} className="critical-line">
              {trimmedLine}
            </p>
          )
        }
      }
      
      // Action/Recommendation lines
      const actionWords = ['RECOMMENDED', 'ACTION', 'NEXT STEPS']
      for (const word of actionWords) {
        if (trimmedLine.includes(word)) {
          return (
            <p key={index} className="action-line">
              {trimmedLine}
            </p>
          )
        }
      }
      
      // Bullet points
      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || /^\d+\./.test(trimmedLine)) {
        return (
          <p key={index} className="bullet-line">
            {trimmedLine}
          </p>
        )
      }
      
      return <p key={index}>{trimmedLine}</p>
    })
  }

  return (
    <section className="executive-summary">
      <div className="summary-header">
        <div className="summary-icon">
          <Brain size={22} />
        </div>
        <div className="summary-title">
          <h3>Risk Assessment</h3>
          <span>AI-powered operational analysis</span>
        </div>
        <span className="summary-badge">
          <Sparkles size={12} />
          AI Generated
        </span>
      </div>
      
      {loading ? (
        <div className="summary-loading">
          <div className="loading-spinner"></div>
          <span>Analyzing internal signals and generating risk assessment...</span>
        </div>
      ) : (
        <div className="summary-content">
          {formatSummaryContent(summary)}
        </div>
      )}
    </section>
  )
}

export default ExecutiveSummary
