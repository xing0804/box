//
function Box(boxname){
    this.x=true;
    this.y=true;
    this.side={
        x1:"",x2:"",y1:"",y2:""
    }
    this.box=document.querySelector(boxname);
    // 拖拽函数
    // this.drag();
}
Box.prototype={
    drag(callback){
        var that=this;
        console.log(that.box);
        console.log(that.side);
        that.box.onmousedown = function (obj) {
            var cx=obj.clientX;
            var cy=obj.clientY;
            var ox=that.box.offsetLeft;
            var oy=that.box.offsetTop;

            var downx=cx-ox;
            var downy=cy-oy;

            document.onmousemove = function (obj) {
                var y=obj.clientY - downy;
                var x=obj.clientX - downx;

                if(that.side.x1!==""){
                    if(x<that.side.x1){
                        x = that.side.x1 ;
                    }  
                }
                if(that.side.x2!==""){
                    if(x>that.side.x2){
                        x= that.side.x2;
                    }
                }
                if(that.side.y1!==""){
                    if(y<that.side.y1){
                        y = that.side.y1;
                    }
                }
                if(that.side.y2!==""){
                    if(y>that.side.y2){
                        y = that.side.y2;
                    }
                }

                if(that.y){
                    that.box.style.top = y + "px";
                }
                if(that.x){
                    that.box.style.left = x + "px";
                }

               
                
                //清除浏览器的默认行为
                obj.preventDefault();
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
            if(callback){
                callback.call(that.box);
            }

        }
    }
}
