import React, {useContext} from 'react'
import ThemeContext from '../Themes'
import Quotegenerator from './Quotegenerator'


export default function Content() {

  const style = useContext(ThemeContext)

  return (
    <>
      <div  className='content--background row'>
        <h1>Hi! <br/>I'm Nicolae,<br/> Front-end developer.</h1>
      </div>

      <div style={style} className='content--projects row' id='content--projects'>
        <div  className='content--project col-8 offset-2'>
          <div style={style} className='content--project--description'>Description</div>
          <div  className='content--project--site quoteGenerator'>
            <Quotegenerator />
          </div>
        </div>
        <div className='content--project col-8 offset-2'>
          <div style={style} className='content--project--description'>Description</div>
          <div style={style} className='content--project--site'>Site</div>
        </div>
        <div className='content--project col-8 offset-2'>
          <div style={style} className='content--project--description'>Description</div>
          <div style={style} className='content--project--site'>Site</div>
        </div>
      </div>
    </>
  )
}
