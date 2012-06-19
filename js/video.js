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
        _video,
        _id = id;
        
    this.create = function() {
        
        var html =  '<video class="retina video" id="'+_id+'" width="'+_dimensions.width+'" height="'+_dimensions.height+'">';
            for(var i = 0; i < _files.length; i++) {
                html += '<source src="'+_files[i].path+'" type="'+_files[i].mime+'" />';
            }
            html +=     'Your browser does not support the video tag.';
            html += '</video>';
        
        _parent.prepend(html);
        
        _video = $('#' + _id);
        
    }
    
    this.play = function() {
        console.log('playing ' + _id);
        _video.css({
            opacity: 1,
            'z-index': 5
        });
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