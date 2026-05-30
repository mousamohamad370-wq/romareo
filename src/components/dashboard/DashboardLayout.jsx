import './DashboardLayout.scss'

import DashboardTopbar
from './DashboardTopbar'

function DashboardLayout({
  children
}) {

  return (

    <div className="dashboard-layout">

      <div className="dashboard-main">

        {/* TOPBAR */}

        <DashboardTopbar />

        {/* PAGE CONTENT */}

        <main className="dashboard-content">

          {children}

        </main>

      </div>

    </div>

  )
}

export default DashboardLayout