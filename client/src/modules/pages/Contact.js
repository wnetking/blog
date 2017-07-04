import React, { Component } from 'react'
import renderHTML from 'react-render-html';

class Contact extends Component {
  componentDidMount() {
    let data = {
      title: 'Contact',
      content: `<h1 class="heading">This is contact page</h1>
                <p>In this page you can whrite me a letter</p>`
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

export default Contact;
