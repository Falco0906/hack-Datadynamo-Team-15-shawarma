import { Activity, Users, DollarSign, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react'

function StatsGrid({ stats }) {
  const statCards = [
    {
      label: 'Total Signals',
      sublabel: 'Events detected',
      value: stats.total,
      icon: Activity,
      iconClass: 'total',
      cardClass: 'total',
      trend: '+12%',
      trendUp: true
    },
    {
      label: 'HR Events',
      sublabel: 'People & workforce',
      value: stats.hr,
      icon: Users,
      iconClass: 'hr',
      cardClass: 'hr',
      trend: '+5%',
      trendUp: true
    },
    {
      label: 'Finance Events',
      sublabel: 'Payments & budgets',
      value: stats.finance,
      icon: DollarSign,
      iconClass: 'finance',
      cardClass: 'finance',
      trend: '-3%',
      trendUp: false
    },
    {
      label: 'Critical/High',
      sublabel: 'Requires attention',
      value: stats.critical,
      icon: AlertTriangle,
      iconClass: 'critical',
      cardClass: 'critical',
      trend: '+8%',
      trendUp: true
    }
  ]

  return (
    <section className="stats-grid">
      {statCards.map((stat, index) => (
        <div className={`stat-card ${stat.cardClass}`} key={index}>
          <div className="stat-header">
            <div className={`stat-icon ${stat.iconClass}`}>
              <stat.icon size={22} />
            </div>
            <span className={`stat-trend ${stat.trendUp ? 'up' : 'down'}`}>
              {stat.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {stat.trend}
            </span>
          </div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
          <div className="stat-sublabel">{stat.sublabel}</div>
        </div>
      ))}
    </section>
  )
}

export default StatsGrid
