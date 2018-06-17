
declare const d3; // D3.js is either already bundled by Webpack or fetched via CDN

export default class D3Voronoi{

  /* Defining the attrinbuteds */
  private target;
  private svg;
  private height;
  private width;
  
  private voronoi;
  private sites;
  private polygon;
  private link;
  private site;

  constructor(targetContainer = '#vonoroi'){
    this.target = d3.select(targetContainer);
    this.renderTheAwesome()
    this.watchForResize();
  }

  /**
   * This is the main render method
   */
  public renderTheAwesome(){

    this.svg = this.target.append("svg");
    this.width   = this.target.node().getBoundingClientRect().width;
    this.height = this.target.node().getBoundingClientRect().height;

    this.svg.attr('width', this.width);
    this.svg.attr('height', this.height);

    this.mouseLeaveEvents();

    /* Calculate how many sites to display and generate them */
    this.sites = d3.range(300).map((d) => { 
      return [Math.random() * this.width, Math.random() * this.height]; 
    });

    /* Add the mouseover event, for highlighting */
    let that = this;
    this.svg.on('touchmove mousemove', function(){
      that.sites[0] = d3.mouse(this);
      that.redraw();
    });

    /* Initialise the D3 Voroni */
    this.voronoi = d3.voronoi()
      .extent([[-1, -1], [this.width + 1, this.height + 1]]);
    
    /* Add Polygon for each site */
    this.polygon = this.svg.append('g')
      .attr('class', 'polygons')
      .selectAll('path')
      .data(this.voronoi.polygons(this.sites))
      .enter().append('path')
      .call(this.redrawPolygon);

    /* Add Lines for each polygon */
    this.link = this.svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.voronoi.links(this.sites))
      .enter().append('line')
      .call(this.redrawLink);

    /* Add the actual Site */
    this.site = this.svg.append('g')
      .attr('class', 'sites')
      .selectAll('circle')
      .data(this.sites)
      .enter().append('circle')
      .attr('r', 2.5)
      .call(this.redrawSite);
  }

    /**
     * Triggers the render methods for polygons, lins and sites
     */
    private redraw() {
      const diagram = this.voronoi(this.sites);
      this.polygon = this.polygon.data(diagram.polygons()).call(this.redrawPolygon);
      this.link = this.link.data(diagram.links()),  this.link.exit().remove();
      this.link = this.link.enter().append('line').merge(this.link).call(this.redrawLink);
      this.site = this.site.data(this.sites).call(this.redrawSite);
    }

    /**
     * Renders a given polygon
     * @param polygon 
     */
    private redrawPolygon(polygon) {
      polygon
        .attr('d', (d) => { return d ? 'M' + d.join('L') + 'Z' : null; })
        .attr('class', (d, i) => { return 'v-' + i % 9; });
    }

    /**
     * Sets the dimensions and positions of the links between sites
     * @param link 
     */
    private redrawLink(link) {
      link
        .attr('x1', (d) => { return d.source[0]; })
        .attr('y1', (d) => { return d.source[1]; })
        .attr('x2', (d) => { return d.target[0]; })
        .attr('y2', (d) => { return d.target[1]; });
    }

    /**
     * Sets dimensions and positions of each given site
     * @param site 
     */
    private redrawSite(site) {
      site
        .attr('cx', (d) => { return d[0]; })
        .attr('cy', (d) => { return d[1]; });
    }

    /**
     * Removes old svg and rerenders a new one
     * Only used in the (hopefully) rare occasion 
     * that a user will resize their browser
     */
    private rerender(){
      this.svg.remove();
      this.renderTheAwesome();
    }

    /**
     * Work-around to make the chart work on all (most) screen sizes
     * @param event
     */
    private watchForResize(){
      let resizeTimer = undefined;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        return resizeTimer = setTimeout((() =>
        this.rerender() ), 250);
      })
    }

    private mouseLeaveEvents(){
      let that = this;
      this.svg.on('mouseleave', function() {   
        d3.selectAll('.polygons :first-child').attr('class', 'deselect-polygon');
      });
  }
}
  