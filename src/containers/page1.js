import React from 'react';
import { Link } from 'react-router';
// import CanvasLogo from '../components/canvasLogo';
function Page1() {
  return (
    <div>
      <CanvasLogo />
      <Link to="/page2">Jump to page2</Link>
    </div>
  );
}
export default Page1;
