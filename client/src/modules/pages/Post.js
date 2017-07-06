import React, {Component} from 'react'
import renderHTML from 'react-render-html';
import BackLink from '../BackLink'

class Post extends Component {
  componentDidMount() {
    fetch(`/post/${this.props.id}`, {method: "POST"})
      .then(res => res.json())
      .then(post => {
        let data = {
          title: post[0].title,
          content: post[0].content
        }
        this.props.updateData(data);
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
        <BackLink />
      </div>
    )
  }
}

export default Post;
