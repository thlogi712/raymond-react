import React, { Component} from 'react';
import { fabric } from 'fabric';

class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.__canvas = new fabric.Canvas('canvas');
  }

  //  addRect = canvi => {
  //   const rect = new fabric.Rect({
  //     height: 280,
  //     width: 200,
  //     fill: 'yellow'
  //   });
  //   canvi.add(rect);
  //   canvi.renderAll();
  // };

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    var canvi = this.__canvas = new fabric.Canvas('canvas');
// create a rectangle object
      var rect = new fabric.Rect({
        height: 280,
        width: 200,
        fill: 'blue'
      });

      canvi.add(rect);
      canvi.renderAll();
}

  _handleImageChange(e) {
    e.preventDefault();
    var canvi = this.__canvas = new fabric.Canvas('canvas');
    var circle = new fabric.Circle({
      radius: 100,
      fill: '#eef',
      scaleY: 0.5,
      originX: 'center',
      originY: 'center'
    });
    var text = new fabric.Text('hello world', {
      fontSize: 30,
      originX: 'center',
      originY: 'center'
    });
    
    var group = new fabric.Group([ circle, text ], {
      left: 150,
      top: 100,
      angle: -10
    });
    canvi.add(group);
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="images1"/>);
    }

    return (
      <div>
        <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange}/>
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
        
                <h1>Fabric.js on React - fabric.Canvas('..Raymond.')</h1>
                {/* <button onClick={() => this._addRect(canvas)}>Rectangle</button> */}
          <br/><br/>
          <canvas id="canvas"></canvas>
        </div>
      </div>
    )
  }

}

export default ImageUpload