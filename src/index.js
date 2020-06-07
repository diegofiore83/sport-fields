import React from 'react'
import PropTypes from 'prop-types'
import landscape from './footballPitchLandscape.module.css'
import portrait from './footballPitchPortrait.module.css'

export const FootballPitch = ({ type }) => {
  const styles = type === 'portrait' ? portrait : landscape

  return (
    <div className={styles.footballPitch}>
      <div className={styles.footballPitchGoalOne}></div>
      <div className={styles.footballPitchGoalTwo}></div>
      <div className={styles.footballPitchSideline}>
        <div className={styles.footballPitchCornerOne}></div>
        <div className={styles.footballPitchCornerTwo}></div>
        <div className={styles.footballPitchGoalArea}></div>
        <div className={styles.footballPitchPenaltyArea}></div>
        <div className={styles.footballPitchPenaltySpot}></div>
        <div className={styles.footballPitchArc}></div>
        <div className={styles.footballPitchHalfwayLine}></div>
        <div className={styles.footballPitchCenterSpot}></div>
      </div>
    </div>
  )
}

FootballPitch.propTypes = {
  type: PropTypes.oneOf(['landscape', 'portrait'])
}

FootballPitch.defaultProps = {
  type: 'portrait'
}
