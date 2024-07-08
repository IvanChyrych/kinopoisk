import React from 'react'

export class Title extends React.Component {
  render () {
    return (
      <h3 className="py-4">{this.props.children}</h3>
    )
  }
}
