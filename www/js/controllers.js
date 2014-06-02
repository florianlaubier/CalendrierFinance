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

    var hauteur = $(".main").height() - 120;
    $(".fc-calendar-container").css("height", hauteur);
    $(window).resize(function(){
        hauteur = $(".main").height() - 120; // récupère la hauteur du main sans les menus
        $(".fc-calendar-container").css("height", hauteur); // défini la taille du calendrier
    });


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
    $('#quotidien').hide();
    $('#hebdomadaire').hide();
    $('#mensuelle').hide();
    $('#annuelle').hide();


    $( '#periodicite' ).mouseout( function() {

        $selection = $("#periodicite option:selected").text();

        if ($selection == "Quotidien")
        {
            $('#quotidien').show("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').hide("slow");

        }
        else if ($selection == "Hebdomadaire")
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').show("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').hide("slow");
        }
        else if ($selection == "Mensuelle")
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').show("slow");
            $('#annuelle').hide("slow");
        }
        else if ($selection == "Annuelle")
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').show("slow");
        }
        else
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').hide("slow");
        }

    });
})

.controller('ListeCtrl', function($scope) {


    var hauteur = $(window).height()-120;
    $("#calendar").css("height", hauteur);
    $(window).resize(function(){
        hauteur = $(window).height()-120; // récupère la hauteur du main sans les menus
        $("#calendar").css("height", hauteur); // défini la taille du calendrier
    });

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

.controller('ParamCtrl', function($scope) {
    $('#param').hide();

    $( '#submitButton' ).click( function() {
        $('#identification').hide("slow");
        $('#param').show("slow");
    });

    $( '.supCritere' ).click( function() {
        $(this).parent().hide("slow");
    });

    $( '#ajoutCrit' ).click( function() {

        selectAjout = $("#newCrit option:selected").text();
        if(selectAjout != "...")
        {
            $(this).parent().parent().prepend(
            '<div class="item item-button-right">'+selectAjout+'<button class="button button-assertive supCritere"><i class="icon ion-close-round"></i></button></div>'
            ).show("slow");
        }
    });
})

.controller('ConCtrl', function($scope) {
});
