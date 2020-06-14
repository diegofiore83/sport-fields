import React from 'react'
import PropTypes from 'prop-types'
import utility from './styles/footballPitchUtility.module.scss'
import landscape from './styles/footballPitchLandscape.module.css'
import portrait from './styles/footballPitchPortrait.module.scss'

export const FootballGrass = utility.footballGrass

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
