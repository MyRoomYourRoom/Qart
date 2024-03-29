import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './ArtDetail.css'
import WorkHeader from '../WorkHeader/WorkHeader'
import DropDown from '../DropDown/DropDown'
import Header from '../Header/Header'
import HeaderSmall from '../Header/HeaderSmall/HeaderSmall'
import Footer from '../Footer/Footer'

function ArtDetail(props) {
  const [menu, setMenu] = useState(0)
  const location = useLocation().state
  const [rows, setRow] = useState(props.rows || 4)
  const [slidersPerRow, setSlidersPerRow] = useState(props.slidersPerRow || 3)

  const [originRow, setOriginRow] = useState(rows)
  const [originSlidersPerRow, setOriginSlidersPerRow] = useState(slidersPerRow)
  const {
    title_e,
    title_k,
    moreList,
    items,
    options,
    breakRows,
    breakSlidersPerRow,
  } = props.items ? props : location
  //console.log(props.rows, props.slidersPerRow)
  const TOTAL_PAGE = Math.round(items.length / (rows * slidersPerRow))
  const [dotArr, setDotArr] = useState(new Array(TOTAL_PAGE).fill(0))
  const sliderRef = useRef()

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    rows: rows,
    slidesPerRow: slidersPerRow,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          rows: rows,
          slidesPerRow: slidersPerRow,
        },
      },
    ],
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
  }
  const slider_items = imgList => {
    return imgList.map((item, i) => {
      return props.divItem ? (
        item
      ) : (
        <Link
          to={item.link + '/' + item.id}
          state={{
            item: item,
          }}
          className="art-d-slider__item-container"
        >
          <div key={i} className="art-d-slider__item">
            <img
              className="art-d-item-image"
              src={require('../../' + item.info)}
            ></img>
            <h3>{item.author}</h3>
            <h2>{item.title}</h2>
            {item.sell ? (
              <div className="nft-item">
                <p>
                  <span className="nft-item-title">제작년도</span>
                  <span className="nft-item-created">{item.created}</span>
                </p>
                <p>
                  <span className="nft-item-title">판매</span>
                  <span className="nft-item-sell">{item.sell}</span>
                </p>
              </div>
            ) : (
              <h4>{item.date}</h4>
            )}
          </div>
        </Link>
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

  // 리사이즈 이벤트를 감지하여 가로 길이에 따라 모바일 여부 결정
  const resizingHandler = () => {
    if (window.innerWidth > 480) {
      setRow(originRow)
      setSlidersPerRow(originSlidersPerRow)
    }
    if (window.innerWidth <= 480) {
      setRow(breakRows)
      setSlidersPerRow(breakSlidersPerRow)
    }
  }
  // 우선 맨 처음 480이하면 모바일 처리

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setRow(breakRows)
      setSlidersPerRow(breakSlidersPerRow)
    } else {
      setRow(rows)
      setSlidersPerRow(slidersPerRow)
    }

    window.addEventListener('resize', resizingHandler)
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener('resize', resizingHandler)
    }
  }, [])

  return (
    <div className="art-d">
      {props.detail ? (
        <Header active="0" colored="black" detail={true} />
      ) : (
        <></>
      )}
      <header className="art-d-header">
        {moreList ? (
          <WorkHeader
            moreList={moreList}
            moreActive={true}
            moreListChange={setMenu}
            moreMenu={menu}
            title_e={title_e}
            title_k={title_k}
            color={false}
          ></WorkHeader>
        ) : (
          <></>
        )}
        <div
          className="container art-d-header-container"
          style={moreList ? { height: '144rem' } : {}}
        >
          <div
            className="art-d-header__info"
            style={moreList ? { visibility: 'hidden' } : {}}
          >
            {title_e ? <h4>{title_e}</h4> : <></>}
            <h2>{title_k}</h2>
          </div>
          <div className="art-d-header__drop">
            <DropDown
              options={props.options ? props.options : options}
              //options={props.options}
            ></DropDown>
          </div>
        </div>
      </header>
      <section className="container art-d-slider">
        <div className="art-d-slider__list">
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
              sliderRef.current.slickGoTo(
                Math.round(items.length / (rows * slidersPerRow)) - 1
              )
            }}
          >
            <span className="ir_pm">끝으로</span>
          </button>
          <Slider ref={sliderRef} {...settings}>
            {slider_items(items)}
          </Slider>
        </div>
      </section>
      {props.detail ? <Footer /> : <></>}
    </div>
  )
}
export default ArtDetail
