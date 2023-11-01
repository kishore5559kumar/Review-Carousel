import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeft = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  onClickRight = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[count]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button
            type="button"
            testid="leftArrow"
            className="button-left-right"
            onClick={this.onClickLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            className="button-left-right"
            testid="rightArrow"
            onClick={this.onClickRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
