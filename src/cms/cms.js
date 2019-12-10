import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import CommunitiesPagePreview from './preview-templates/CommunitiesPagePreview'
import FinancingPagePreview from './preview-templates/FinancingPagePreview'
import ListingPostPreview from './preview-templates/ListingPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('communities', CommunitiesPagePreview)
CMS.registerPreviewTemplate('financing', FinancingPagePreview)
CMS.registerPreviewTemplate('listings', ListingPostPreview)
