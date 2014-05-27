////////////////////
////
/// La récupération des données se fait
/// en décalé (function settimeout, pour laisser 
/// le temps à la requette sql de s'effectuer. à améliorer)
///
///
//////////////////




angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

getAlerts();
setTimeout(function() {
$(function() {
                var transEndEventNames = {
                        'WebkitTransition' : 'webkitTransitionEnd',
                        'MozTransition' : 'transitionend',
                        'OTransition' : 'oTransitionEnd',
                        'msTransition' : 'MSTransitionEnd',
                        'transition' : 'transitionend'
                    },
                    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
                    $wrapper = $( '#custom-inner' ),
                    $calendar = $( '#calendar' ),
                    cal = $calendar.calendario( {
                        onDayClick : function( $el, $contentEl, dateProperties ) {

                            if( $contentEl.length > 0 ) {
                                showEvents( $contentEl, dateProperties );
                            }

                        },
                        caldata :codropsEvents,
                        displayWeekAbbr : true
                    } ),
                    $month = $( '#custom-month' ).html( cal.getMonthName() ),
                    $year = $( '#custom-year' ).html( cal.getYear() );

                $( '#custom-next' ).on( 'click', function() {
                    cal.gotoNextMonth( updateMonthYear );
                } );
                $( '#custom-prev' ).on( 'click', function() {
                    cal.gotoPreviousMonth( updateMonthYear );
                } );

                function updateMonthYear() {
                    $month.html( cal.getMonthName() );
                    $year.html( cal.getYear() );
                }

                // just an example..
                function showEvents( $contentEl, dateProperties ) {

                    hideEvents();

                    var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
                        $close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

                    $events.append( $contentEl.html() , $close ).insertAfter( $wrapper );

                    setTimeout( function() {
                        $events.css( 'top', '0%' );
                    }, 25 );

                }
                function hideEvents() {

                    var $events = $( '#custom-content-reveal' );
                    if( $events.length > 0 ) {

                        $events.css( 'top', '100%' );
                        Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

                    }

                }

            });}, 500);

    
})

.controller('AjoutCtrl', function($scope) {
})

.controller('ListeCtrl', function($scope) {
})

.controller('ParamCtrl', function($scope) {
});
