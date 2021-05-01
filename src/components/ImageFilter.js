import React, { Component } from 'react';
import { fabric } from 'fabric';
// import { saveAs } from 'file-saver';

class ImageFilter extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  static defaultProps = {
    scale: 1.0,
  }

  
  componentDidMount() {
    
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerSize = 6;
    fabric.Object.prototype.rotatingPointOffset = 20;

    const canvas = new fabric.Canvas("canvas");
    const content = ` Hello From South Africa   `;
    const textbox = new fabric.IText(content, {
      width: 180,
      height: 70,
      fontSize: 18
    });

    const button = document.getElementById('btn-download');
      button.addEventListener('click', function (e) {
        const dataURL = canvas.toDataURL('image/png');
        button.href = dataURL;
        console.log(dataURL);
    });
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      top: 65, 
      left: 85,
      fill: 'orange'
    });

    

    const imgSource = "http://upload.wikimedia.org/wikipedia/commons/e/e7/Mozilla_Firefox_3.5_logo_256.png";
    fabric.Image.fromURL(imgSource, function(img) {
        img.set({top: 65, left: 85, angle: -10, opacity: 1, selectable: true});
        img.filters.push(new fabric.Image.filters.Sepia());
        img.applyFilters();
        canvas.add(img);
    }, {crossOrigin: 'anonymous'});

    textbox.set("lineHeight", 1.2);
    textbox.set("charSpacing", 150);
    textbox.set("left", (canvas.width - textbox.width)/2)
    textbox.set("top", (canvas.height - textbox.height))

    canvas.add(rect);
    canvas.add(textbox);
    canvas.requestRenderAll();
    this.canvas = canvas;

    
    
  }

  removeShape (e)  {
    this.canvas.remove(this.canvas.getActiveObject());
    console.log(this.canvas.getObjects());
  };
  
  image = () => {
    const img = this.canvas.toDataURL({
      format: 'png',
      multiplier: 2
    });
    this.setState({ img })
    console.log(this.canvas.getActiveObject());
    this.canvas.getActiveObject();
    this.canvas.requestRenderAll();
  }


  render() {
    return (
      <div className="container">
        <h4>
          Start editing to see some magic happen :)
        </h4>
        <canvas id="canvas" width='550px' height='430px'  style={{ border: '1px solid #ddd' }}>
        </canvas>
        
        {
          this.state.img ? <img class='vignette-inset' src={this.state.img} style={{ border: '1px solid #ddd' }} alt="images1" /> : null
        }
        
        <div>
        <h4>Download image </h4>
        <button> <a href="#test" className="button" id="btn-download" download="my-file-name.png">Download</a></button>
        </div><br/>
        <div>
        <button type="button" className="button" onClick={this.removeshape}><a>Delete selected object</a></button>

        </div>
        
      </div>
    );
  }
}

export default ImageFilter
