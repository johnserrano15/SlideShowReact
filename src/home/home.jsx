import React from 'react'
import { render } from 'react-dom'

import Slides from '../slides/slides.jsx'
import api from '../../api'

const app = document.getElementById('app')

render(<Slides />, app)
