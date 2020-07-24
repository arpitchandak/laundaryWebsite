import React from 'react'
import ContentLoader from 'react-content-loader'

const DataListLoader = props => {
  return (
    <ContentLoader
      width={330}
      height={304}
      speed={1}
      primaryColor="#e4e4e4"
      secondaryColor="#d3d3d3"
      {...props}
    >

      <rect x="66" y="97" rx="0" ry="0" width="202" height="41" />
      <rect x="284" y="97" rx="0" ry="0" width="202" height="41" />
      <rect x="506" y="96" rx="0" ry="0" width="202" height="41" />
      <rect x="66" y="155" rx="0" ry="0" width="642" height="4" />
      <rect x="66" y="175" rx="0" ry="0" width="642" height="4" />
      <rect x="65" y="195" rx="0" ry="0" width="642" height="4" />
      <rect x="66" y="215" rx="0" ry="0" width="642" height="4" />
      <rect x="66" y="236" rx="0" ry="0" width="642" height="4" />
      <rect x="65" y="256" rx="0" ry="0" width="642" height="4" />

    </ContentLoader>
  )
}



export default DataListLoader