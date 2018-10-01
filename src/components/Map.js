import React from 'react'

const Map = () => {
    return (
        <div class="mapouter">
            <div className="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?center=39,-77&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <a href="https://www.pureblack.de">pureblack.de</a>
            </div>
        </div>
    )
}

export default Map