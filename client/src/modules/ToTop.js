import React, {Component} from 'react'

class ToTop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: false
    }
  }

  scrollToTop() {
    let intervalId = 0;

    function scrollStep() {
      if (window.pageYOffset === 0) {
        clearInterval(intervalId);
      }
      window.scroll(0, window.pageYOffset - 50);
    }

    intervalId = setInterval(scrollStep, 16.66);
  }

  componentDidMount() {
    let self = this

    window.addEventListener('scroll', function (e) {
      self.setState({
        display: window.scrollY > 500 ? true : false
      })
    });
  }

  render() {
    let {display} = this.state
    return (
      <button className={`to-top fa fa-angle-up ${display ? '' : 'invisible'}`} onClick={this.scrollToTop}></button>
    )
  }
}

export default ToTop;
