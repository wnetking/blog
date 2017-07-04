import React, { Component } from 'react'
import renderHTML from 'react-render-html';

class About extends Component {
  componentWillMount() {
    this.props.updateData({});
  }
  componentDidMount() {
    let data = {
      title: 'About',
      content: `<h1 class="heading">This is about page</h1>
                <p>In this page you find information about me.</p>`
    }
    this.props.updateData(data);
  }

  render() {
    let { data } = this.props
    return (
      <div>
        <div className={`row`}>
          <h2 className="sub-title">
            {data.title}
          </h2>
        </div>
        <div>
          {renderHTML(data.content)}
        </div>
      </div>
    )
  }
}

export default About;
