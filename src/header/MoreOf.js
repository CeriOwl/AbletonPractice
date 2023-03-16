import React, { Component } from 'react'

export default class MoreOf extends Component {
  render() {
    return (
      <div className='more-from-ableton'>
        <span>More from Ableton:</span>
        <div>
            <a href='#'>
                <div>
                    <span>Loop</span>
                    <p>Watch Talks, Performances and Features from Ableton's Summit for Music Makers.</p>
                </div>
            </a>
            <a href='#'>
                <div>
                    <span>Learning Music</span>
                    <p>Learn the fundamentals of music making right in your browser.</p>
                </div>
            </a>
            <a href='#'>
                <div>
                    <span>Learning Synths</span>
                    <p>Get stared with synthesis using a web-based synth and accompaying lessons.</p>
                </div>
            </a>
            <a href='#'>
                <div>
                    <span>Making Music</span>
                    <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                </div>
            </a>
        </div>
      </div>
    )
  }
}
