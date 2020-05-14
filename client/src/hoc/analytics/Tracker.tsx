import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Analytics from '../../utils/analytics/Analytics';

export default function TrackedRoute({ ...props }) {
  const currentLocation = props.location.pathname;

  useEffect(() => {
    Analytics.setPage(currentLocation);
  }, [currentLocation]);

  return <Route {...props} />;
}
