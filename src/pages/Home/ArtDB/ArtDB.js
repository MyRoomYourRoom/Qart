import React from 'react'
import GalleryDirection from '../../../components/GalleryDirection/GalleryDirection'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import './ArtDB.css'
const ArtDB = () => {
  const infoItem = [
    {
      image: 'assets/art_01.png',
      link: '/artdb/artist',
      small: 'Art Database',
      section: 'Artist',
      title: '큐아트 작가 정보 바로가기',
    },
    {
      image: 'assets/art_02.png',
      link: '/artdb/work',
      small: 'Art Database',
      section: 'Work',
      title: '큐아트 작품 정보 바로가기',
      order: -1,
    },
    {
      image: 'assets/art_03.png',
      link: '/artdb/venue',
      small: 'Art Database',
      section: 'Agency&Collector',
      title: '소장처별 바로가기',
    },
  ]

  return (
    <section className="artbase">
      <SectionHeader title="Art Database" />
      <GalleryDirection items={infoItem} />
    </section>
  )
}
export default ArtDB
