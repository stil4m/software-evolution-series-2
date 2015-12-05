angular.module('CloneDetection').config(function(NotificationProvider) {
  NotificationProvider.setOptions({
    delay: 2000,
    startTop: 20,
    startRight: 10,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    positionX: 'right',
    positionY: 'top'
  });
});