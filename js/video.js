/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var Video = function() {
    
    var _video,
        ctime;
    
    this.init = function() {
        
    }
    
    var keepTime = function() {
        _video.addEventListener('timeupdate', function() {
            ctime = _video.currentTime;
        
        }, false);
    }
    
};