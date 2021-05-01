import { fabric } from 'fabric';


const Demo = () => {
    var canvas = new fabric.Canvas('canvas');
    document.onload = () => {
        console.log("Canvas Image **********************************");
        document.getElementById("file").addEventListener("change", function(e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function(f) {
                var data = f.target.result;
                fabric.Image.fromURL(data, function(img) {
                    var oImg = img.set({
                        left: 50,
                        top: 100
                        // angle: 01
                    }).scale(0.9);
                    canvas.add(oImg).renderAll();
                    canvas.setActiveObject(oImg);
                    var dataURL = canvas.toDataURL({
                        format: 'jpeg',
                        quality: 0.8
                    });
                    
                    console.log("Canvas Image " + dataURL);
                    document.getElementById('txt').href = dataURL;
                });
            };
            reader.readAsDataURL(file);
            
            
        });
    }
   
  return(
    <div>
      <script src="https://rawgit.com/kangax/fabric.js/master/dist/fabric.min.js"></script>
        <canvas id="canvas" width="750" height="550"></canvas>
        <input type="file" id="file"/>
        {/* <a href='' id='txt'>Click Me!!</a> */}
    </div>
  );
};

export default Demo