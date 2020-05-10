import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components';
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const SliderCSS = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`;
const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const Slider = props => {
  const { slides } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    let interval = null

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000)
    }

    return () => {
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)

      if (props.autoPlay) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => {
    let _slides = []

    // // We're at the last slide.
    // if (activeSlide === slides.length - 1)
    //   _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // // We're back at the first slide. Just reset to how it was on initial render
    // else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // // Create an array of the previous last slide, and the next two slides that follow it.
    // else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }

  const nextSlide = () =>{
    setState({
      ...state,
      translate:  activeSlide ==2 ? 0:translate + getWidth() ,
      activeSlide: activeSlide == slides.length - 1 ? 0 : activeSlide + 1
    })
    console.log("Next slide");
    console.log(activeSlide);
  }


  const prevSlide = () =>{
    setState({
      ...state,
      translate: translate - getWidth(),
      activeSlide: activeSlide == 0 ? slides.length - 1  : activeSlide - 1
    })
    console.log("prev slide");
    console.log(activeSlide);
  }
    


  
  return (
    <SliderCSS>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={getWidth()} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" onClick={prevSlide} />
      <Arrow direction="right" onClick={nextSlide} />
{/* 
      <Dots slides={slides} activeSlide={activeSlide} /> */}
    </SliderCSS>
  )
}



export default Slider