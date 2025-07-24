"use client"

import React from 'react'

const DashboardView = ({ insights }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Industry Insights</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(insights, null, 2)}</pre>
    </div>
  )
}

export default DashboardView;
