import React from 'react'
import PropTypes from 'prop-types'
import { FinancingPageTemplate } from '../../templates/financing-page'

const FinancingPagePreview = ({ entry, widgetFor }) => (
  <FinancingPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FinancingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FinancingPagePreview
