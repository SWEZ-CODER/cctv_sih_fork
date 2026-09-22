import './App.css'

type Activity = {
  cameraId: string
  location: string
  anomaly: string
  severity: 'Low' | 'Medium' | 'Severe'
}

const activities: Activity[] = [
  { cameraId: 'Camera 01', location: 'Main Gate', anomaly: 'Unauthorized entry', severity: 'Severe' },
  { cameraId: 'Camera 02', location: 'Parking Area', anomaly: 'Crowd detected', severity: 'Medium' },
  { cameraId: 'Camera 03', location: 'Building A', anomaly: 'No abnormal activity', severity: 'Low' },
  { cameraId: 'Camera 04', location: 'Back Gate', anomaly: 'Suspicious movement', severity: 'Severe' },
]

function App() {
  return (
    <main className="activity-page">
      <section className="activity-panel">
        <div className="panel-header">
          <h1>Recent Activity</h1>
        </div>

        <div className="activity-list">
          {activities.map((activity) => (
            <article
              className={`activity-card severity-${activity.severity.toLowerCase()}`}
              key={activity.cameraId}
            >
              <span className="camera-id">{activity.cameraId}</span>
              <span>{activity.location}</span>
              <span>{activity.anomaly}</span>
              <span className="severity">{activity.severity}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
