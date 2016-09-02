import React from 'react';
import { NavBar, Icon, List } from 'antd-mobile';

class Nav extends React.Component {

  onLeftClick() {
    window.history.go(-1);
  }

  render() {
    const pathname = window.location.pathname.substring(1);
    let iconName = 'left';
    let leftContent = (<span key="0" onClick={ this.onLeftClick }>返回</span>);

    if (pathname === 'home' || pathname === '') {
      iconName = false;
      leftContent = '';
    }

    return (
      <div style={{ padding: 8 }}>
      <NavBar iconName={ iconName } leftContent={leftContent} mode="light"
        rightContent={ <Icon type="ellipsis" /> }
      > 隔壁老王 </NavBar>
      </div>
    );
  }
}
export default Nav;
