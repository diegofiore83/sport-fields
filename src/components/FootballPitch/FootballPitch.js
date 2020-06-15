import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/footballPitch.module.scss'

const FootballPitch = () => {
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

FootballPitch.propTypes = {}

FootballPitch.defaultProps = {}

export default FootballPitch
