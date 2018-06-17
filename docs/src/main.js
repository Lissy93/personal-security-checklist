import './styles/voronoi-styles.scss'
import D3Voronoi from './scripts/d3-voronoi.ts'
import SmoothScrolling from './scripts/page-actions.js'

const voronoi = new D3Voronoi();

// I will go to hell for this next line
Window.finishMdRender = ()=> SmoothScrolling(); 