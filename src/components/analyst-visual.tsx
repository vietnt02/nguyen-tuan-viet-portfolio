export function AnalystVisual() {
  return (
    <div className="analyst-visual" role="img" aria-label="Data dashboard preview">
      <div className="visual-topline">
        <span>SQL Server</span>
        <span>Python</span>
        <span>Tableau</span>
      </div>
      <div className="chart-panel">
        <div className="bar bar-a" />
        <div className="bar bar-b" />
        <div className="bar bar-c" />
        <div className="bar bar-d" />
        <div className="bar bar-e" />
      </div>
      <div className="query-card">
        <code>SELECT season, goals, assists</code>
        <code>FROM premier_league_metrics</code>
        <code>WHERE insight_ready = 1;</code>
      </div>
    </div>
  );
}
