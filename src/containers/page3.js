import React from 'react';
import { Link } from 'react-router';
import Logo from '../components/logo';
function Page3() {
  return (
    <div>
      <Logo />
      <Link to="/page1">Jump to page1</Link>
    </div>
  );
}
export default Page3;
