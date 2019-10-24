import React from 'react'

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {
          items.filter((item, idx) => idx < 4).map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview
