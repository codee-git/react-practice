import React from "react";

class B extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callApi();
  }

  render() {
    <>
      {this.props.isLoading ? <h1>Loading ....</h1> : this.props.list.map(item => <h1>item.name</h1>)}
    </>;
  }
}

export default withCallList(B, {
  a: 1
});