import React from 'react';
import MyD3Component from './MyD3Component';

export default class D3Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = [10, 20, 30];

    return (
      <div>
        <h1>D3 Example</h1>
        <MyD3Component
          data={data}
        />
      </div>
    );
  }
}
