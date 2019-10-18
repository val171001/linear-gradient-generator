import React from 'react';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import Modal from 'components/Modal/Modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideModal: true,
    };
  }

  cardClick = (gradient) => {
    navigator.clipboard.writeText(gradient);
    this.setState({ hideModal: false });
    setTimeout(() => this.setState({ hideModal: true }), 2000);
  }

  render() {
    const colorList = [
      ['#30496B', '#30B8D2'],
      ['#FBCA88', '#EF69AD'],
      ['#B6C1D4', '#EC68B1'],
      ['#ABE5E6', '#7062F0'],
      ['#476892', '#59355D'],
      ['#92F1D5', '#ABF6BD'],
      ['#7D6AE7', '#56A2D5'],
      ['#82E9E4', '#F3D62F'],
      ['#239FE9', '#44D5F3'],
      ['#3D3949', '#6772A4'],
      ['#FD5A49', '#FDDC98'],
      ['#9AD3DE', '#93B8C0'],
      ['#F32F8E', '#B236D0'],
      ['#247CC4', '#336BAE'],
      ['#FB7140', '#FB9951'],
      ['#6FE594', '#27A47C'],
      ['#95FD48', '#19E9A6'],
      ['#469FFF', '#A39AF9'],
      ['#5CF0F8', '#ECDDFE'],
      ['#F1467A', '#FB949E'],
      ['#DAE7F0', '#FADAE7'],
      ['#6155D4', '#5B97F2'],
      ['#47AEA3', '#08B1C5'],
      ['#DA1FF2', '#4C15D0'],
      ['#D0F56B', '#5876FB'],
      ['#FFE9D0', '#FD7153'],
      ['#DBFDEC', '#FFC2D4'],
      ['#C3A8EE', '#F5C1EA'],
      ['#484C91', '#929BEF'],
      ['#97F7FB', '#8D8AFC'],
    ];
    const { hideModal } = this.state;
    return (
      <section className="app">
        <Modal text="👍 Linear gradient copied to clipboard." hide={hideModal} />
        <Header
          title="Linear Gradient Generator"
          subtitle="Made with React, and ❤️"
          shareUrl="https://twitter.com"
          shareText="tweet!"
          logo="https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/ca_logo.svg"
        />
        <div className="container">
          {colorList.map((value) => (
            <Card
              color1={value[0]}
              color2={value[1]}
              clickAction={this.cardClick}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
