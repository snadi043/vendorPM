import React from 'react'

const DoRender = (props) => {
    if (typeof props.players === 'object') {
      return (
        <ul>
          {props.players}
        </ul>
      );
    } else { 
      return (
        <ul dangerouslySetInnerHTML={{__html: props.players}} />
      );
    }
  }

export default DoRender;