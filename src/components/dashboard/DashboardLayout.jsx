import './DashboardSidebar.scss'

import DashboardSidebar
from './DashboardSidebar'

function DashboardLayout({
  children
}) {

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <DashboardSidebar />

      {/* CONTENT */}

      <main className="dashboard-content">

        {children}

      </main>

    </div>

  )
}

export default DashboardLayout