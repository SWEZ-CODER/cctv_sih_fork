import { useState } from 'react'
import './App.css'

type Camera = {
  id: string
  name: string
  location: string
  status: 'Live' | 'Offline'
  people: number
}

const cameras: Camera[] = [
  { id: '01', name: 'Main Gate', location: 'North Entrance', status: 'Live', people: 18 },
  { id: '02', name: 'Parking Area', location: 'East Parking', status: 'Live', people: 31 },
  { id: '03', name: 'Building A', location: 'Academic Block', status: 'Live', people: 12 },
  { id: '04', name: 'Back Gate', location: 'South Entrance', status: 'Offline', people: 0 },
]

const alerts = [
  { title: 'Crowd detected', camera: 'Camera 02 · Parking Area', time: '2 min ago', level: 'High' },
  { title: 'Camera disconnected', camera: 'Camera 04 · Back Gate', time: '8 min ago', level: 'Medium' },
  { title: 'Restricted area activity', camera: 'Camera 01 · Main Gate', time: '14 min ago', level: 'High' },
]

const activity = [
  'Camera 02 started live streaming',
  'Alert acknowledged by operator',
  'Camera 03 detected 12 people',
  'System health check completed',
]

function App() {
  const [selectedCamera, setSelectedCamera] = useState(cameras[0])

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div>
          <div className="brand">
            <div className="brand-mark">C</div>
            <div>
              <strong>CCTV Command</strong>
              <span>Security dashboard</span>
            </div>
          </div>

          <nav>
            <p className="nav-label">Monitoring</p>
            <a className="nav-item active" href="#overview">Overview</a>
            <a className="nav-item" href="#cameras">Cameras</a>
            <a className="nav-item" href="#alerts">Alerts</a>
            <a className="nav-item" href="#activity">Activity</a>
          </nav>
        </div>

        <div className="system-status">
          <span className="status-dot" />
          <div>
            <strong>System Online</strong>
            <span>All services operational</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <span className="eyebrow">Security Operations</span>
            <h1>Dashboard</h1>
          </div>

          <div className="topbar-actions">
            <span className="live-pill"><span className="pulse" /> Live monitoring</span>
            <button className="icon-button" aria-label="Notifications">🔔</button>
            <div className="avatar">SC</div>
          </div>
        </header>

        <section id="overview" className="stats-grid">
          <article className="stat-card">
            <span className="stat-label">Active cameras</span>
            <strong>3 / 4</strong>
            <span className="stat-meta">75% online</span>
          </article>
          <article className="stat-card">
            <span className="stat-label">People detected</span>
            <strong>61</strong>
            <span className="stat-meta positive">+8% vs previous hour</span>
          </article>
          <article className="stat-card">
            <span className="stat-label">Open alerts</span>
            <strong>3</strong>
            <span className="stat-meta warning">2 high priority</span>
          </article>
          <article className="stat-card">
            <span className="stat-label">System uptime</span>
            <strong>99.8%</strong>
            <span className="stat-meta">Last 30 days</span>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel live-panel" id="cameras">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Live feed</span>
                <h2>Camera {selectedCamera.id} · {selectedCamera.name}</h2>
              </div>
              <span className={selectedCamera.status === 'Live' ? 'badge live' : 'badge offline'}>
                {selectedCamera.status}
              </span>
            </div>

            <div className="camera-feed">
              <div className="feed-overlay">
                <span>1080p</span>
                <span>30 FPS</span>
                <span>Latency 84 ms</span>
              </div>
              <div className="feed-grid" />
              <div className="feed-center">
                <span className="camera-icon">◉</span>
                <strong>{selectedCamera.location}</strong>
                <span>{selectedCamera.status === 'Live' ? 'Live video preview' : 'Feed unavailable'}</span>
              </div>
            </div>

            <div className="camera-switcher">
              {cameras.map((camera) => (
                <button
                  key={camera.id}
                  className={camera.id === selectedCamera.id ? 'camera-chip selected' : 'camera-chip'}
                  onClick={() => setSelectedCamera(camera)}
                >
                  <span className={camera.status === 'Live' ? 'mini-dot live-dot' : 'mini-dot'} />
                  <span>Camera {camera.id}</span>
                  <small>{camera.people} people</small>
                </button>
              ))}
            </div>
          </article>

          <article className="panel" id="alerts">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Priority queue</span>
                <h2>Recent alerts</h2>
              </div>
              <span className="panel-count">3</span>
            </div>

            <div className="alert-list">
              {alerts.map((alert) => (
                <div className="alert-row" key={alert.title}>
                  <span className={alert.level === 'High' ? 'alert-marker high' : 'alert-marker'} />
                  <div className="row-copy">
                    <strong>{alert.title}</strong>
                    <span>{alert.camera}</span>
                  </div>
                  <div className="row-side">
                    <small>{alert.time}</small>
                    <span className={alert.level === 'High' ? 'severity high' : 'severity'}>{alert.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="lower-grid">
          <article className="panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Infrastructure</span>
                <h2>Camera health</h2>
              </div>
            </div>

            <div className="health-list">
              {cameras.map((camera) => (
                <div className="health-row" key={camera.id}>
                  <div className="camera-avatar">0{camera.id}</div>
                  <div className="row-copy">
                    <strong>{camera.name}</strong>
                    <span>{camera.location}</span>
                  </div>
                  <span className={camera.status === 'Live' ? 'health-badge healthy' : 'health-badge down'}>
                    {camera.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel" id="activity">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Timeline</span>
                <h2>Recent activity</h2>
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
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
