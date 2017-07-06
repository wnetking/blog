import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Posts extends Component {
  constructor() {
    super()

    this.state = {
      content: []
    }
  }

  componentDidMount() {
    fetch('/post', {method: "POST"})
      .then(res => res.json())
      .then(posts => {
        this.setState({
          content: posts
        })
      });

    this.props.updateData({
      title: 'Blog',
      content: ''
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
        <div>
          {this.state.content.map((item, index) => (
            <div key={index} className="blog-post">
              <div className="post-title">
                <h3>
                  <Link to={`/post/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
              </div>
              <div className="post-info">
                <span>{item.date} / by <a href="/">{item.autor}</a></span>
              </div>
              <p>{item.shortDesc}</p>
              <Link to={`/post/${item.id}`}>
                <span className="button button-style button-anim fa fa-long-arrow-right">Read More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Posts;
