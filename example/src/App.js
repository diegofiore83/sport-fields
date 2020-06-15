import React, { useState } from 'react'

import { FootballPitch3d } from 'sport-fields'
import 'sport-fields/dist/index.css'

const App = () => {
  const [width, setWidth] = useState(500)

  return (
    // <>
    //   <div>
    //     Change width:
    //     <input
    //       id='footballPitchResizerW'
    //       type='range'
    //       min='200'
    //       max='1000'
    //       value={width}
    //       onChange={(e) => setWidth(e.target.value)}
    //       onInput={(e) => setWidth(e.target.value)}
    //     />
    //     {width}px
    //   </div>
    //   <div style={{ width: `${width}px`, margin: '5px' }}>
    //     <FootballPitch />
    //   </div>
    // </>
    <>
      <div>
        Change width:
        <input
          id='footballPitchResizerW'
          type='range'
          min='200'
          max='1000'
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          onInput={(e) => setWidth(e.target.value)}
        />
        {width}px
      </div>
      <div style={{ width: `${width}px`, margin: '5px' }}>
        <FootballPitch3d />
      </div>
    </>
  )
}

export default App
