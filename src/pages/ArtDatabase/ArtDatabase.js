import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall'
function ArtDatabase(props) {
  const moreList = {
    menu: [
      {
        title: 'Work',
        link: '#',
      },
      {
        title: 'Artist',
        link: '#',
      },
      {
        title: 'Venue',
        link: '#',
      },
    ],
  }
  return (
    <div className="main">
      <Header active="0" colored="black" />
      <SearchHeader title="Art Database" />
      <HeaderSmall moreList={moreList} active={props.active} />
      {props.children}
      <Footer />
    </div>
  )
}
export default ArtDatabase
