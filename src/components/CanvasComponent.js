import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';


const CanvasComponent  = () => {
  const [ canvas, setCanvas] = useState('');  

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);  
  
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'yellow'
    })
  );  

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow'
    });
    canvi.add(rect);
    canvi.renderAll();
  };


 const  _handleSubmit = (e) => {
    e.preventDefault();
};

//   const removeShape = () => {
//     canvas.remove(canvas.getActiveObject())
//     console.log(canvas.getObjects())
// }

  const _handlePhoto = canvi => {
    const rect = new fabric.Rect({
      height: 180,
      width: 200,
      fill: 'blue'
    });
    new fabric.Canvas('canvas',{
      height: 480,
        width: 400,
        fill: 'blue'
     });
     canvi.add(rect);
    canvi.renderAll();
    }

  const  _handleImageChange = (e) => {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
      console.log("====== reader ===========", reader);
      console.log("=================", e.target.files[0]);
  
      reader.onloadend = () => {
        
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }

    
    // new fabric.Canvas('canvas');
    // canvas.selection = false;
    // canvas.clear(); 
    // var imgElement = document.getElementById("imgLoader");
    // console.log("image imgElement ", imgElement);
    // var imgInstance = new fabric.Image(imgElement, {
    //     {
        // left: 100,
        // top: 100,
        // angle: 30,
        // opacity: 0.85

    // }
  //   })
  //   console.log("image instance ", imgInstance);
  //   canvas.add(imgInstance);
  // }

  return (
    <div>
        <form onSubmit={_handleSubmit}>
            <input type="file" accept="image/*" onChange={_handleImageChange} />
            <button type="submit" onClick={_handlePhoto}>edit</button>
        </form>

          <div>
                <h1>Fabric.js on React - fabric.Canvas('...')</h1>
                <button onClick={() => addRect(canvas)}>Rectangle</button>
          <br/><br/>
          <canvas id="canvas"></canvas>
        </div>
    </div>
    );
}
export default CanvasComponent