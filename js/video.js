/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 *  @param parent
 *  @param id String The id of the video element (phase1, phase2, loop1, loop2 etc.)
 *  @param dimensions object literal specifying width and height
 *  @param files Array of object literals indicating mime and file type
 *  @param timing Array of times to start and stop or a string indicating its a loop
 *
 **/
var Video = function(parent, id, dimensions, files, isLoop) {
    
    var _parent = parent,
        _dimensions = dimensions,
        _files = files,
        _isLoop = isLoop || false,
        _video,
        _id = id;
        
    this.create = function() {
        
        var loop = (_isLoop) ? '' : '';
        
        var html =  '<video class="retina video" id="'+_id+'" width="'+_dimensions.width+'" height="'+_dimensions.height+'" '+loop+'>';
            for(var i = 0; i < _files.length; i++) {
                html += '<source src="'+_files[i].path+'" type="'+_files[i].mime+'" />';
            }
            html +=     'Your browser does not support the video tag.';
            html += '</video>';
        
        _parent.prepend(html);
        
        _video = $('#' + _id);
        
        if(_isLoop) {
            _video[0].addEventListener('timeupdate', updateTime, false);
        }
        
    }
    
    var updateTime = function() {
        console.log(_video[0].currentTime);
//        console.log(_video[0].duration);
        if(_video[0].currentTime === _video[0].duration) {
//            _video[0].pause();
            _video[0].currentTime = 0.1;
            _video[0].play();
        }
    }
    
    this.loop = function() {
        _video.css({
            opacity: 1,
            'z-index': 5
        });
        
//        console.log(_video[0].currentTime);
        
        _video[0].play();
        
    }
    
    this.play = function() {
        console.log('playing ' + _id);
        
        return _video[0].play();
        
    }
    
    this.pause = function() {
        console.log('pausing ' + _id);
        _video.css({
            opacity: 0,
            'z-index': 1
        });
        return _video[0].pause();
    }
    
    this.getVideo = function() {
        return _video;
    }
    
};