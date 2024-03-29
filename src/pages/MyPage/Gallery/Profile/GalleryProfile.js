import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../../../../components/DropDown/DropDown'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import HeaderSmall from '../../../../components/Header/HeaderSmall/HeaderSmall'
import CheckModal from '../../../../components/Modal/CheckModal'
import ModalPortal from '../../../../components/Modal/ModalPortal'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import './GalleryProfile.css'

function GalleryProfile() {
  const moreList = {
    menu: [
      {
        title: '프로필',
        link: '/mypage/gallery',
      },
      {
        title: 'My Archive',
        link: '/mypage/gallery/archive',
      },
      {
        title: '나의 지갑',
        link: '/mypage/gallery/wallet',
      },
      {
        title: '관심목록',
        link: '/mypage/gallery/like',
      },
    ],
  }
  const [edit, setEdit] = useState(true)

  // 모달창 노출 여부 state
  const [checkOpen, setCheckOpen] = useState(false)

  // 모달창 노출
  const showCheckModal = () => {
    setCheckOpen(true)
  }
  const phonelist = ['+82', '+82', '+82', '+82', '+82', '+82']
  const banklist = ['은행', '은행', '은행', '은행']
  const infoList = ['본명으로 활동(Real Name)', '본명으로 활동(Real Name)']
  const infoList2 = ['기관', '작가']
  return (
    <div
      className={edit ? 'mypage-artist' : 'mypage-artist mypage-artist-profile'}
    >
      <Header login={true} colored="black" />
      <nav className="search">
        <div className="container search__container">
          <h2 className="search__title">마이페이지</h2>
        </div>
      </nav>
      <HeaderSmall moreList={moreList} active={true} choice={0} />
      {edit ? <></> : <SectionHeader title="프로필 수정" />}
      <section className="gallery-profile">
        <section
          className={
            edit
              ? 'container artist-profile-edit cant-edit'
              : 'container artist-profile-edit'
          }
        >
          {edit ? (
            <div className="ap-edit-header">
              <div className="ap-edit-header-mb">
                <h1>프로필 관리</h1>
                <button onClick={() => setEdit(false)}>수정하기</button>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="gp-edit-content">
            <div className="ap-edit-image">
              <h2>기관 사진</h2>
              <img
                src={require('../../../../qart_test/김홍도 Kim, Hongdo, 대한민국, 1745-1806경.jpg')}
              ></img>
              {edit ? <></> : <button className="edit-photo"></button>}
            </div>
            <ul className="gp-edit-basic">
              <div className="ap-edit-content-mb">
                <li className="has-2-input">
                  <h2>기관명</h2>
                  <input
                    type="text"
                    className="a-profile-input"
                    placeholder="한글 Ko"
                    disabled={edit}
                  ></input>
                  <input
                    type="text"
                    className="a-profile-input"
                    placeholder="영문 Eng"
                    disabled={edit}
                  ></input>
                </li>
                <li>
                  <h2>설립연월일</h2>
                  <input
                    type="date"
                    className="date-input"
                    data-placeholder="YYYY.MM.DD"
                    disabled={edit}
                  ></input>
                </li>

                <li>
                  <h2>주소</h2>
                  <div className="search__block">
                    <input
                      type="text"
                      placeholder="주소 검색"
                      className="search__block"
                      disabled={edit}
                    ></input>
                    <button className="search__block__button">
                      <span className="ir_pm">검색</span>
                    </button>
                  </div>
                </li>
              </div>
            </ul>
            <ul className="gp-edit-personal">
              <div className="ap-edit-content-mb">
                <li>
                  <h2>담당자명</h2>
                  <input
                    type="text"
                    className="a-profile-input"
                    placeholder="한글 Ko"
                    disabled={edit}
                  ></input>
                </li>
                <li>
                  <h2>담당자 번호</h2>
                  <div className="gp-drop">
                    <DropDown disabled={edit} options={phonelist} />
                    <input
                      type="text"
                      className="a-profile-input__number"
                      placeholder="01000000000"
                      disabled={edit}
                    ></input>
                  </div>
                </li>
                <li>
                  <h2>추가 연락처1</h2>
                  <div className="gp-drop">
                    <DropDown disabled={edit} options={phonelist} />
                    <input
                      type="text"
                      className="a-profile-input__number"
                      placeholder="01000000000"
                      disabled={edit}
                    ></input>
                  </div>
                </li>
                <li>
                  <h2>추가 연락처2</h2>
                  <div className="gp-drop">
                    <DropDown disabled={edit} options={phonelist} />
                    <input
                      type="text"
                      className="a-profile-input__number"
                      placeholder="01000000000"
                      disabled={edit}
                    ></input>
                  </div>
                </li>
              </div>
            </ul>
            <ul className="gp-edit-personal">
              <div className="ap-edit-content-mb">
                <li>
                  <h2>사용자 유형 변경</h2>
                  <DropDown disabled={edit} options={infoList2} />
                </li>
                {edit ? (
                  <li>
                    <h2>서명 및 인장 등록</h2>
                    <input
                      type="text"
                      className="a-profile-input"
                      placeholder="미등록"
                      disabled={edit}
                    ></input>
                  </li>
                ) : (
                  <></>
                )}
                {edit ? (
                  <li>
                    <h2>웹 / SNS</h2>
                    <input
                      type="text"
                      className="a-profile-input"
                      placeholder="mryrhelp@naver.com"
                      disabled={edit}
                    ></input>
                  </li>
                ) : (
                  <></>
                )}
              </div>
            </ul>
            <ul className="ap-edit-intro">
              <div className="ap-edit-content-mb">
                <li>
                  <h2>기관 소개</h2>
                  <textarea placeholder="기관" readOnly={edit}></textarea>
                </li>
              </div>
            </ul>
          </div>
          {edit ? (
            <></>
          ) : (
            <section className="ap-profile-edit--button">
              <button onClick={showCheckModal}>수정하기</button>
              <div className="ap-mobile-edit--button">
                <button>취소</button>
                <button onClick={showCheckModal}>저장</button>
              </div>
              {checkOpen && (
                <ModalPortal>
                  <CheckModal
                    setModalOpen={setCheckOpen}
                    setFunc={setEdit}
                    title={'수정 완료'}
                    content={'프로필 수정을 완료하시겠습니까?'}
                  />
                </ModalPortal>
              )}
            </section>
          )}
        </section>
      </section>
      {edit ? (
        <div>
          <section className="gallery-profile-school">
            <div className="container gallery-profile-school-container">
              <div className="gp-edit-header">
                <div className="ap-edit-header-mb">
                  <h1>팀원 관리</h1>
                  <Link to={'./team'}>
                    <button>팀원 추가</button>
                  </Link>
                </div>
              </div>
              <ul className="gp-exhibition-list">
                <li className="gp-list--header">
                  <span>이름</span>
                  <span>아이디</span>
                  <span>전화번호</span>
                  <span>직무</span>
                  <div className="gp-liat--button"></div>
                </li>
                <li className="ap-list">
                  <span>홍길동</span>
                  <span>mryrhelp123</span>
                  <span>010-0000-0000</span>
                  <span>홍길동</span>
                  <div className="gp-liat--button">
                    <button>삭제</button>
                    <button>편집</button>
                  </div>
                </li>
                <li className="ap-list">
                  <span>홍길동</span>
                  <span>mryrhelp123</span>
                  <span>010-0000-0000</span>
                  <span>홍길동</span>
                  <div className="gp-liat--button">
                    <button>삭제</button>
                    <button>편집</button>
                  </div>
                </li>
                <li className="ap-list">
                  <span>홍길동</span>
                  <span>mryrhelp123</span>
                  <span>010-0000-0000</span>
                  <span>홍길동</span>
                  <div className="gp-liat--button">
                    <button>삭제</button>
                    <button>편집</button>
                  </div>
                </li>
                <li className="ap-list">
                  <span>홍길동</span>
                  <span>mryrhelp123</span>
                  <span>010-0000-0000</span>
                  <span>홍길동</span>
                  <div className="gp-liat--button">
                    <button>삭제</button>
                    <button>편집</button>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">이름</span>
                    <span>홍길동</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">아이디</span>
                    <span>mryrhelp123</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">전화번호</span>
                    <span>010-0000-0000</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">직무</span>
                    <span>홍길동</span>
                  </div>
                  <div className="ap-list-mb-button">
                    <button>삭제</button>
                    <button>편집</button>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">이름</span>
                    <span>홍길동</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">아이디</span>
                    <span>mryrhelp123</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">전화번호</span>
                    <span>010-0000-0000</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">직무</span>
                    <span>홍길동</span>
                  </div>
                  <div className="ap-list-mb-button">
                    <button>삭제</button>
                    <button>편집</button>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">이름</span>
                    <span>홍길동</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">아이디</span>
                    <span>mryrhelp123</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">전화번호</span>
                    <span>010-0000-0000</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">직무</span>
                    <span>홍길동</span>
                  </div>
                  <div className="ap-list-mb-button">
                    <button>삭제</button>
                    <button>편집</button>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="gallery-profile-exhibition">
            <div className="container gallery-profile-exhibition-container">
              <div className="gp-edit-header">
                <div className="ap-edit-header-mb">
                  <h1>Agency History</h1>
                  <Link to={'./agency'}>
                    <button>이력 추가</button>
                  </Link>
                </div>
              </div>
              <ul className="gp-exhibition-list gp-agency-list">
                <li className="gp-list--header">
                  <span>N</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list">
                  <span>1</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list">
                  <span>2</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list">
                  <span>3</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list">
                  <span>4</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Company name</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Representive Name</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Change Date</span>
                    <span>0000-00-00</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Address</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Company name</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Representive Name</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Change Date</span>
                    <span>0000-00-00</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Address</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Company name</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Representive Name</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Change Date</span>
                    <span>0000-00-00</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Address</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Company name</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Representive Name</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Change Date</span>
                    <span>0000-00-00</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Address</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="gallery-profile-exhibition">
            <div className="container gallery-profile-exhibition-container">
              <div className="gp-edit-header">
                <div className="ap-edit-header-mb">
                  <h1>Exhibition History</h1>
                  <Link to={'./exhibition'}>
                    <button>전시 추가</button>
                  </Link>
                </div>
              </div>
              <ul className="gp-exhibition-list gp-history-list">
                <li className="gp-list--header">
                  <span>N</span>
                  <span>Exname</span>
                  <span>Place</span>
                  <span>Country</span>
                  <span>Date</span>
                </li>
                <li className="ap-list">
                  <span>1</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list">
                  <span>2</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list">
                  <span>3</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list">
                  <span>4</span>
                  <span>Company name</span>
                  <span>Representive Name</span>
                  <span>Change Date</span>
                  <span>Address</span>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Exname</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Place</span>
                    <span>
                      서울특별시 서울시 송파구 송파대로 570 101동 101호
                    </span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Country</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Date</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Exname</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Place</span>
                    <span>
                      서울특별시 서울시 송파구 송파대로 570 101동 101호
                    </span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Country</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Date</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Exname</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Place</span>
                    <span>
                      서울특별시 서울시 송파구 송파대로 570 101동 101호
                    </span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Country</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Date</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
                <li className="ap-list-mb">
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Exname</span>
                    <span>Company name</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Place</span>
                    <span>
                      서울특별시 서울시 송파구 송파대로 570 101동 101호
                    </span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Country</span>
                    <span>Korea</span>
                  </div>
                  <div className="ap-list-mb-content">
                    <span className="ap-list-title">Date</span>
                    <span>0000-00-00</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  )
}
export default GalleryProfile
