import React, {Component} from 'react'
import renderHTML from 'react-render-html';

class Contact extends Component {
  componentDidMount() {
    fetch(`/contact`, {method: "POST"})
      .then(res => res.json())
      .then(content => {

        this.props.updateData(content);
      });
  }

  render() {
    let {data} = this.props
    return (
      <div>
        <div className={`row`}>
          <h2 className="sub-title">
            {data.title}
          </h2>
        </div>
        <div className="col-md-12 well-1">
          {renderHTML(data.content)}
        </div>
      </div>
    )
  }
}

export default Contact;
