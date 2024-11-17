// basic react dashboard page
import React, {useEffect} from 'react';

function DashboardPage() {
    useEffect(() => {
        document.title = "Dashboard - GG PMS";
    }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default DashboardPage;