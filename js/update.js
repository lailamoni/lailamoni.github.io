var availableVersion = 6;

function checkForUpdate() {
    if (installedVersion < availableVersion) {
        return true;
    } else {
        return false;
    }
}

function update() {
    var internet = document.getElementById('internet');
    var updateInfo = document.getElementById('update-info');
    var whatsNew = '';
    var message = '<div class="bg-update">';
    
    internet.innerHTML = '';
    
    if (installedVersion < availableVersion) {
        message += '<h3 class="center orange Cinzel-Regular">' + 
            'Update Available!</h3>';
        message += whatsNew;
        message += '<br/><br/>'+
            '<a href="#update-info" onclick="window.open(\'https://lailamoni.github.io/lailamoni.apk\', \'_system\');"' +
               ' class="font-large bold button bg-blue">'+
               'Download Now</a> <br/><br/>';
    } else {
        message += '<h3 class="green">Your App is<br/>Uptodate</h3>';
    }
    
    message += '</div>';
    updateInfo.innerHTML = message;
}
