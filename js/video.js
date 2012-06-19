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
        
//        var appCache = window.applicationCache;
//        
//        function handleCacheEvent(evt) {
//            alert('downloading:' + evt)
//        }
        
//        // Fired after the first cache of the manifest.
//        appCache.addEventListener('cached', alert('Fired after the first cache of the manifest.'), false);
//
//        // Checking for an update. Always the first event fired in the sequence.
//        appCache.addEventListener('checking', alert('Checking for an update. Always the first event fired in the sequence.'), false);
//
//        // An update was found. The browser is fetching resources.
//        appCache.addEventListener('downloading', handleCacheEvent, false);

        // The manifest returns 404 or 410, the download failed,
        // or the manifest changed while the download was in progress.
//        appCache.addEventListener('error', alert('The manifest returns 404 or 410, the download failed,'), false);

//        // Fired after the first download of the manifest.
//        appCache.addEventListener('noupdate', alert('manifest not chagned.'), false);
//
//        // Fired if the manifest file returns a 404 or 410.
//        // This results in the application cache being deleted.
//        appCache.addEventListener('obsolete', alert('This results in the application cache being deleted'), false);
//
//        // Fired for each resource listed in the manifest as it is being fetched.
//        appCache.addEventListener('progress', alert('Fired for each resource listed in the manifest as it is being fetched.'), false);
//
//        // Fired when the manifest resources have been newly redownloaded.
//        appCache.addEventListener('updateready', alert('Fired when the manifest resources have been newly redownloaded.'), false);
        
        
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