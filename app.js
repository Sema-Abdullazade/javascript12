function showNotification() {
    var notificationsContainer = document.getElementById('notification-container');
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = 'Mesaj ' + getRandomInt(1, 5);
    notificationsContainer.insertBefore(notification, notificationsContainer.firstChild);
    setTimeout(function() {
        notification.classList.add('show');
    }, 100);

    setTimeout(function() {
        notification.remove();
    }, 3000);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}