import './App.css'

const activity = [
  'Camera 02 started live streaming',
  'Alert acknowledged by operator',
  'Camera 03 detected 12 people',
  'System health check completed',
]

function App() {
  return (
    <main className="activity-page">
      <section className="activity-panel">
        <div className="panel-header">
          <div>
            <span className="eyebrow">Timeline</span>
            <h1>Recent Activity</h1>
          </div>
        </div>

        <div className="activity-list">
          {activity.map((item, index) => (
            <div className="activity-row" key={item}>
              <span className="activity-line">
                <span className="activity-dot" />
              </span>
              <div>
                <strong>{item}</strong>
                <span>{index + 1} minute{index === 0 ? '' : 's'} ago</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
