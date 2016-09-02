import React from 'react';
import { Link } from 'react-router';
import { ListView } from 'antd-mobile';

const data = [
  {
    img: 'http://7xl432.com1.z0.glb.clouddn.com/background.jpg',
    page: 'page1',
  },
  {
    img: 'http://7xl432.com1.z0.glb.clouddn.com/page44.jpg',
    page: 'page2',
  },
  {
    img: 'http://7xkj1z.com1.z0.glb.clouddn.com/bg1.jpg',
    page: 'page3',
  },
];
let index = data.length - 1;

const NUM_SECTIONS = 4;
const NUM_ROWS_PER_SECTION = 1;
let pageIndex = 0;

class Home extends React.Component {

  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.dataBlob = {};
    this.sectionIDs = [];
    this.rowIDs = [];
    this.genData = (pIndex = 0) => {
      for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        this.sectionIDs.push(sectionName);
        this.dataBlob[sectionName] = sectionName;
        this.rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
          const rowName = `S${ii}, R${jj}`;
          this.rowIDs[ii].push(rowName);
          this.dataBlob[rowName] = rowName;
        }
      }
      // new object ref
      this.sectionIDs = [].concat(this.sectionIDs);
      this.rowIDs = [].concat(this.rowIDs);
    };
    this.genData();
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
      isLoading: false,
    };
  }

  onEndReached() {
     // load new data
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    // const separator = (sectionID, rowID) => (
    //   <div key={`${sectionID}-${rowID}`} style={{
    //     backgroundColor: '#F5F5F9',
    //     height: 8,
    //     borderTop: '1px solid #ECECED',
    //     borderBottom: '1px solid #ECECED',
    //   }} />
    // );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} >
        <Link to={obj.page}><img className="home-list" src={obj.img} /></Link>
        </div>
      );
    };
    return (
      <div style={{ margin: '0 auto', width: '96%' }}>
        <ListView
          dataSource={this.state.dataSource}
          renderHeader={() => <span>Test List</span>}
          renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? '加载中...' : '加载完毕'}
          </div>}
          // renderSectionHeader={(sectionData) => (
          //   <div>{`Page1 ${sectionData.split(' ')[1]}`}</div>
          // )}
          renderRow={row}
          // renderSeparator={separator}
          pageSize={10}
          scrollRenderAheadDistance={500}
          scrollEventThrottle={10}
          onScroll={() => { console.log('scroll'); }}
          onEndReached={this.onEndReached.bind(this)}
          onEndReachedThreshold={10}
          style={{
            height : 1000,
            overflow: 'auto',
          }}
        />
      </div>
    );
  }
}
export default Home;
