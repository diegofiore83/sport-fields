import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../../styles/footballPitch3d.module.scss'

const FootballPitch3d = () => {
  return (
    <div className={styles.stage}>
      <div className={styles.world}>
        <div className={styles.terrain}>
          <div className={classNames(styles.field, styles.fieldAlt)}></div>
          <div className={styles.field}>
            <div className={classNames(styles.fieldTexture, styles.fieldGradient)}></div>
            <div className={classNames(styles.fieldTexture, styles.fieldGrass)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLineGoalArea)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLineGoalArea, styles.fieldLineGoalAreaFar)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLineOutline)}>
                <div className={classNames(styles.fieldLine, styles.fieldLineCorner)}></div>
                <div className={classNames(styles.fieldLine, styles.fieldLineCorner, styles.fieldLineCornerFar)}></div>
            </div>
            <div className={classNames(styles.fieldLine, styles.fieldLinePenaltyArea)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLinePenaltyArea, styles.fieldLinePenaltyAreaFar)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLinePenaltySpot)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLinePenaltySpot, styles.fieldLinePenaltySpotFar)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLinePenaltyArc)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLinePenaltyArc, styles.fieldLinePenaltyArcFar)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLineMid)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLineCircle)}></div>
            <div className={classNames(styles.fieldLine, styles.fieldLineCircleSpot)}></div>
          </div>
          <div className={classNames(styles.fieldSide, styles.fieldSideFront)}></div>
          <div className={classNames(styles.fieldSide, styles.fieldSideLeft)}></div>
          <div className={classNames(styles.fieldSide, styles.fieldSideRight)}></div>
          <div className={classNames(styles.fieldSide, styles.fieldSideBack)}></div>
        </div>
      </div>
    </div>
  )
}

FootballPitch3d.propTypes = {}

FootballPitch3d.defaultProps = {}

export default FootballPitch3d
