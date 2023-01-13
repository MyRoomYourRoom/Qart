import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './ArtDetail.css'
import WorkHeader from '../WorkHeader/WorkHeader'

function ArtDetail() {
  const { title_e, title_k, moreList, items } = useLocation().state
  const TOTAL_PAGE = Math.round(items.length / 12)
  const [dotArr, setDotArr] = useState(new Array(TOTAL_PAGE).fill(0))
  const sliderRef = useRef()

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    rows: 4,
    slidesPerRow: 3,
    appendDots: dots => (
      <div>
        <ul className="slick-dots-container">
          {dots.map((item, index) => {
            return (
              <li
                key={index}
                style={
                  dotArr[index]
                    ? { display: 'none' }
                    : { display: 'inline-block' }
                }
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    ),
    customPaging: i => <div className="dots-number">{i + 1}</div>,
    beforeChange: (prev, next) => {
      ShowPaginationNumbers(next + 1)
    },
    afterChange: (prev, current) => {},
  }
  const slider_items = imgList => {
    return imgList.map((item, i) => {
      return (
        <div key={i} className="page-slider__item">
          <img
            className="page-item-image"
            src={require('../../' + item.info)}
          ></img>
          <h3>{item.author}</h3>
          <h2>{item.title}</h2>
          <h4>{item.date}</h4>
        </div>
      )
    })
  }

  function ShowPaginationNumbers(currentPage) {
    let startPage
    let endPage
    if (TOTAL_PAGE <= 6) {
      // 전체 페이지가 6보다 작을 경우 모두 보여준다.
      startPage = 1
      endPage = TOTAL_PAGE
    } else if (currentPage + 1 == 1) {
      startPage = TOTAL_PAGE - 6
      endPage = TOTAL_PAGE
    } else {
      // 전체 페이지가 6 보다 많을 경우 시작과 끝을 계산한다.
      if (currentPage <= 4) {
        startPage = 1
        endPage = 6
      } else if (currentPage + 2 >= TOTAL_PAGE) {
        startPage = TOTAL_PAGE - 4
        endPage = TOTAL_PAGE
      } else {
        startPage = currentPage - 3
        endPage = currentPage + 2
      }
    }

    let numArr = new Array(TOTAL_PAGE).fill(1)
    for (var i = startPage - 1; i <= endPage - 1; i++) {
      numArr[i] = false // 시작 - 끝 만 보이도록
    }
    setDotArr(numArr)
  }

  return (
    <div className="art-d">
      <header className="art-d-header">
        {moreList ? (
          <WorkHeader
            moreList={moreList}
            moreActive={true}
            title_e={title_e}
            title_k={title_k}
            color={false}
          ></WorkHeader>
        ) : (
          <></>
        )}
        <div
          className="container art-d-header-container"
          style={moreList ? { height: '144px' } : {}}
        >
          <div
            className="art-d-header__info"
            style={moreList ? { visibility: 'hidden' } : {}}
          >
            {title_e ? <h4>{title_e}</h4> : <></>}
            <h2>{title_k}</h2>
          </div>
          <select className="email-input-email email">
            <option value="최신순">최신순</option>
            <option value="인기순">인기순</option>
            <option value="인기순">..순</option>
            <option value="뭐뭐순">뭐뭐순</option>
          </select>
        </div>
      </header>
      <section className="container page-slider">
        <div className="page-slider__list">
          <button
            className="slick-first"
            onClick={() => {
              sliderRef.current.slickGoTo(0)
            }}
          >
            <span className="ir_pm">처음으로</span>
          </button>

          <button
            className="slick-last"
            onClick={() => {
              sliderRef.current.slickGoTo(Math.round(items.length / 12) - 1)
            }}
          >
            <span className="ir_pm">끝으로</span>
          </button>
          <Slider ref={sliderRef} {...settings}>
            {slider_items(items)}
          </Slider>
        </div>
      </section>
    </div>
  )
}
export default ArtDetail