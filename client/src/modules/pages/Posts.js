import React, { Component } from 'react'

class Posts extends Component {
  constructor() {
    super()

    this.state = {
      content: [
        {
          id: 1,
          title: 'How to make your company website based on bootstrap framework on localhost?',
          date: 'November 23, 2016',
          autor: 'Admin',
          shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Molestiae ut ratione similique temporibus tempora dicta soluta? 
                      Qui hic, voluptatem nemo quo corporis dignissimos voluptatum 
                      debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit. Molestiae ut ratione similique.`
        },
        {
          id: 2,
          title: 'How to make your company website based on bootstrap framework on localhost?',
          date: 'November 23, 2016',
          autor: 'Admin',
          shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Molestiae ut ratione similique temporibus tempora dicta soluta? 
                      Qui hic, voluptatem nemo quo corporis dignissimos voluptatum 
                      debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit. Molestiae ut ratione similique.`
        },
        {
          id: 3,
          title: 'How to make your company website based on bootstrap framework on localhost?',
          date: 'November 23, 2016',
          autor: 'Admin',
          shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Molestiae ut ratione similique temporibus tempora dicta soluta? 
                      Qui hic, voluptatem nemo quo corporis dignissimos voluptatum 
                      debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit. Molestiae ut ratione similique.`
        },
        {
          id: 4,
          title: 'How to make your company website based on bootstrap framework on localhost?',
          date: 'November 23, 2016',
          autor: 'Admin',
          shortDesc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Molestiae ut ratione similique temporibus tempora dicta soluta? 
                      Qui hic, voluptatem nemo quo corporis dignissimos voluptatum 
                      debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit. Molestiae ut ratione similique.`
        }
      ]
    }
  }
  componentDidMount() {
    this.props.updateData({
      title: 'Blog',
      content: ''
    });
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
          {this.state.content.map((item, index) => (
            <div key={index} className="col-md-12 blog-post">
              <div className="post-title">
                <h1>
                  <a href="single.html">
                    {item.title}
                  </a>
                </h1>
              </div>
              <div className="post-info">
                <span>{item.date} / by <a href="/">{item.autor}</a></span>
              </div>
              <p>{item.shortDesc}</p>
              <a href="single.html" className="button button-style button-anim fa fa-long-arrow-right">
                <span>Read More</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Posts;
