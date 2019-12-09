import React from 'react'
import PropTypes from 'prop-types'
import { ListingPostTemplate } from '../../templates/listing-post'

const ListingPostPreview = ({ entry, widgetFor }) => (
  <ListingPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ListingPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ListingPostPreview
