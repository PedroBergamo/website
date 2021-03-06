import React, { Component } from "react";
import '../styles.css';

export class Newsletter extends Component {
  render() {
    return (
      <main>
        <div className="card">
          <div className="email-icon">
            <svg
              height="100"
              viewBox="0 0 74 74"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="color_line" data-name="color line">
                <path
                  d="m69.497 28.098v42.819h-66.109v-42.819"
                  fill="#fcd462"
                />
                <path d="m66.11 28.097h3.39v42.57h-3.39z" fill="#f7be56" />
                <path
                  d="m45.089 9.502-8.646-6.585-8.647 6.585-15.242 11.61-9.17 6.986 9.17 6.986 23.889 18.195 23.888-18.195 9.17-6.986-9.17-6.986z"
                  fill="#f7be56"
                />
                <path
                  d="m36.442 53.779a.5.5 0 0 1 -.3-.1l-33.061-25.179a.5.5 0 0 1 0-.8l33.059-25.181a.5.5 0 0 1 .605 0l8.647 6.581 24.408 18.6a.5.5 0 0 1 0 .8l-33.055 25.177a.5.5 0 0 1 -.303.102zm-32.233-25.679 32.233 24.55 32.234-24.55-32.234-24.555z"
                  fill="#323c6b"
                />
                <path
                  d="m69.5 71.417h-66.116a.5.5 0 0 1 -.308-.895l27.8-21.649a.5.5 0 0 1 .615.789l-26.651 20.755h63.205l-26.65-20.755a.5.5 0 0 1 .615-.789l27.8 21.649a.5.5 0 0 1 -.308.895z"
                  fill="#323c6b"
                />
                <path
                  d="m60.331 35.084v-25.582h-47.777v25.582l23.889 18.195z"
                  fill="#eeefee"
                />
                <path
                  d="m60.33 9.497v25.59l-3.31 2.52v-24.86h-44.47v-3.25z"
                  fill="#e1e6e9"
                />
                <g fill="#323c6b">
                  <path d="m52.738 18.583h-32.591a.5.5 0 0 1 0-1h32.591a.5.5 0 0 1 0 1z" />
                  <path d="m52.738 26.417h-32.591a.5.5 0 0 1 0-1h32.591a.5.5 0 0 1 0 1z" />
                  <path d="m52.738 34.251h-32.591a.5.5 0 0 1 0-1h32.591a.5.5 0 0 1 0 1z" />
                  <path d="m72.5 56.75a.5.5 0 0 1 -.5-.5v-.792a.5.5 0 0 1 1 0v.792a.5.5 0 0 1 -.5.5z" />
                  <path d="m72.5 68.6a.5.5 0 0 1 -.5-.5v-9.433a.5.5 0 1 1 1 0v9.433a.5.5 0 0 1 -.5.5z" />
                  <path d="m9.554 11.635a.5.5 0 0 1 -.5-.5v-4.635a.5.5 0 0 1 .5-.5h6.17a.5.5 0 1 1 0 1h-5.67v4.134a.5.5 0 0 1 -.5.501z" />
                  <path d="m19.036 7h-1.052a.5.5 0 0 1 0-1h1.052a.5.5 0 0 1 0 1z" />
                  <path d="m69.5 71.417h-66.112a.5.5 0 0 1 -.5-.5v-42.817a.5.5 0 0 1 1 0v42.317h65.112v-42.317a.5.5 0 0 1 1 0v42.817a.5.5 0 0 1 -.5.5z" />
                  <path d="m36.442 53.779a.5.5 0 0 1 -.3-.1l-23.891-18.197a.5.5 0 0 1 -.2-.4v-25.582a.5.5 0 0 1 .5-.5h47.78a.5.5 0 0 1 .5.5v25.584a.5.5 0 0 1 -.2.4l-23.886 18.193a.5.5 0 0 1 -.303.102zm-23.388-18.943 23.388 17.814 23.389-17.814v-24.836h-46.777z" />
                </g>
                <path
                  d="m19.2 54.412a.65.65 0 0 1 -.4-1.165l.627-.483a.65.65 0 1 1 .793 1.029l-.627.483a.646.646 0 0 1 -.393.136z"
                  fill="#fff"
                />
                <path
                  d="m9.808 61.651a.65.65 0 0 1 -.4-1.165l6.675-5.147a.65.65 0 1 1 .793 1.029l-6.676 5.148a.646.646 0 0 1 -.392.135z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <h3 className="card-title">
            Subscribe to Santeria Society!
          </h3>
          <p className="card-sub-title"></p>
          <div className="form-group">
            <form>
              <input
                type="text"
                name="useremail-id"
                id="useremail-id"
                placeholder="Enter your email"
              />
              <button type="submit" id="subscribe" disabled>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Newsletter;
