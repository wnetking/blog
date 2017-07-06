import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollY: 0
    }
  }

  componentDidMount() {
    let self = this;
    window.addEventListener('scroll', function (e) {
      self.setState({
        scrollY: window.scrollY
      })
    });
  }

  render() {
    let {scrollY} = this.state
    return (
      <aside className={`sidebar-fixed`} style={{marginTop: scrollY + 'px'}}>
        <div className="avatar">
          <img src={process.env.PUBLIC_URL + '/img/avatar.jpg'} alt='avatar'/>
        </div>
        <menu className={`menu-link`}>
          <ul>
            <li><Link to={`/`}>Blog</Link></li>
            <li><Link to={`/about`}>About</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>
          </ul>
        </menu>
        <div className="details">
          <h2 className="name">Illya Kyrylov</h2>
          <span className="profession">FrontEnd Developer</span>
          <ul className='social-icon'>
            <li>
              <a href='/' rel='noopener noreferrer' target='_blank' className='facebook'><i className='fa fa-facebook'></i></a>
            </li>
            <li>
              <a href='/' rel='noopener noreferrer' target='_blank' className='twitter'><i className='fa fa-twitter'></i></a>
            </li>
            <li>
              <a href='/' rel='noopener noreferrer' target='_blank' className='linkedin'><i className='fa fa-linkedin'></i></a>
            </li>
            <li>
              <a href='/' rel='noopener noreferrer' target='_blank' className='github'><i className='fa fa-github'></i></a>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}