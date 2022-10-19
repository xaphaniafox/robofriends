import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: 'max-height' }}>
      { props.children }
    </div>
  )
}

export default Scroll;