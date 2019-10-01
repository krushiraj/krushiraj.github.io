import React from 'react'
import { StyledCrumb } from './Layout/styles'
import { Link } from 'gatsby'

export default ({path}) => {
  let urls = [], name = '', url ='', lastIndex = 0
  for(let index in path) {
    // eslint-disable-next-line
    if(index == 0) {
      urls.push({name: 'Krushi Raj Tula', url: '/'})
    }
    else if(path[index] === '/'){
      url = path.slice(0, index) + '/'
      name = url.slice(
          lastIndex + 1, index
        ).replace(/-/g, '\u00a0')
      name = name[0].toUpperCase() + name.slice(1)
      urls.push({ url , name})
      lastIndex = parseInt(index, 10)
    }
  }
  return <StyledCrumb>
    {urls.map(({url, name}, index) =>
      <React.Fragment key= { index }>
        <Link to={url}>{name}</Link>
        {" "}/{" "}
      </React.Fragment>
    )}
  </StyledCrumb>
}