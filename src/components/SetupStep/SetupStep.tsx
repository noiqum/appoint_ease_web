import React from 'react'
import CalendarIcon from '../../assets/svg/icon-calender-2.svg'
import MessageIcon from '../../assets/svg/message-icon.svg'
import CelebrateIcon from '../../assets/svg/thanks-icon.svg'
import DaysIcon from '../../assets/svg/days-icons.svg'
import Lines from '../../assets/svg/Visual.svg'
import './SetupStep.scss'
import Share from '../../assets/svg/share.svg'
interface SetupStepProps {
  step: 1 | 2 | 3
}
interface IsetupConstantElement {
  title: string
  subtitle?: string
  iconSource: string
  visualSource: string
  textTitle: string
  textparag: string
}
interface IsetupStepComponentConstants {
  1: IsetupConstantElement
  2: IsetupConstantElement
  3: IsetupConstantElement
}
const setupStepComponentConstants: IsetupStepComponentConstants = {
  1: {
    title: 'set your availability',
    iconSource: CalendarIcon,
    subtitle: '',
    visualSource: DaysIcon,
    textTitle: 'Set your availability',
    textparag:
      'Define your schedule, connect your calendar and the right times will show on your booking page.',
  },
  2: {
    title: 'share your booking link',
    iconSource: MessageIcon,
    subtitle: '',
    visualSource: Share,
    textTitle: 'Share your scheduling link',
    textparag: 'Share your booking page via email, text, social, or even embed it on your website.',
  },
  3: {
    title: 'thanks for booking!',
    iconSource: CelebrateIcon,
    subtitle: 'You`ll receive an email with calendar invite.',
    visualSource: Lines,
    textparag:
      'As people start scheduling time with you, Appointlet provides a dashboard to manage your bookings.',
    textTitle: 'Watch the bookings fly in',
  },
}

function SetupStep({ step }: SetupStepProps) {
  const { title, subtitle, visualSource, iconSource, textTitle, textparag } =
    setupStepComponentConstants[step]
  return (
    <div className='SetupStep'>
      <div className='SetupStep__box'>
        <span className='SetupStep__box__step'>{step}</span>
        <span className='SetupStep__box__icon bg-coral-600'>
          <img src={iconSource} alt='' />
        </span>
        <p className='SetupStep__box__title'>{title}</p>
        {subtitle && <small className='SetupStep__box__subtitle'>{subtitle}</small>}
        <div className='SetupStep__box__visual'>
          <img src={visualSource} alt='' />
        </div>
      </div>
      <div className='SetupStep__text'>
        <div className='SetupStep__text__title'>{textTitle}</div>
        <div className='SetupStep__text__parag'>{textparag}</div>
      </div>
    </div>
  )
}

export default SetupStep
