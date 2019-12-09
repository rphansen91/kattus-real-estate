import React from 'react'
import PropTypes from 'prop-types'
import { CommunitiesPageTemplate } from '../../templates/communities-page'

const CommunitiesPagePreview = ({ entry, widgetFor }) => (
  <CommunitiesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CommunitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CommunitiesPagePreview
