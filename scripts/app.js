import $ from 'jquery';

$(function() {
    const $window = $(window);
    const $menuBtn = $('#menuBtn');
    const $mobileMenu = $('#mobile-menu');
    const $notifMob = $('#notifications-mobile')
    const $notifDesk = $('#notifications-desktop')
    const $notifPanel = $('#notif-panel');
    const $notifPanelOverlay = $('#notif-panel-overlay')
    const $notifPanelSlideOver = $('#notif-panel-slide-over')
    const $notifPanelClose = $('#notif-panel-close')
    const $modal = $('#modal')
    const $modalPanel = $('#modal-panel')
    const $modalOverlay = $('#modal-overlay')
    const $modalButtons = $modalPanel.find('button')
    const $deactivateAccount = $('#deactivate-account')
    const $userMenu = $('#user-menu')
    const $userMenuDrop = $('#user-menu-drop')

    let windowMode = $window.width() > 768 ? 'desk' : 'mob';

    $menuBtn.on('click', function() {
        const $block = $menuBtn.find('.block')
        const $hidden = $menuBtn.find('.hidden')

        $block.addClass('hidden').removeClass('block')
        $hidden.addClass('block').removeClass('hidden')
        $mobileMenu.toggleClass('block').toggleClass('hidden')
    });

    const showNotifPanel = function () {
        $notifPanel.show();
        $notifPanelOverlay.addClass('opacity-100').removeClass('opacity-0')
        $notifPanelSlideOver.addClass('translate-x-0').removeClass('translate-x-full')
        $notifPanelClose.addClass('opacity-100').removeClass('opacity-0')
    }

    $notifMob.on('click', showNotifPanel);
    $notifDesk.on('click', showNotifPanel);

    $notifPanelClose.on('click', function () {
        $notifPanelOverlay.addClass('opacity-0').removeClass('opacity-100')
        $notifPanelSlideOver.addClass('translate-x-full').removeClass('translate-x-0')
        $notifPanelClose.addClass('opacity-0').removeClass('opacity-100')
        setTimeout(function () {
            $notifPanel.hide();
        }, windowMode === 'mob' ? 500 : 700)
    })

    $('#close-announcement').on('click', function () {
        $('#announcement').remove();
    })

    $deactivateAccount.on('click', function () {
        $modal.show();
        $modalOverlay.addClass('ease-out duration-300 opacity-100').removeClass('ease-in duration-200 opacity-0')
        $modalPanel.addClass('ease-out duration-300 opacity-100 translate-y-0 sm:scale-100').removeClass('ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95')
    })

    $modalButtons.on('click', function() {
        $modalOverlay.addClass('ease-in duration-200 opacity-0').removeClass('ease-out duration-300 opacity-100')
        $modalPanel.addClass('ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95').removeClass('ease-out duration-300 opacity-100 translate-y-0 sm:scale-100')
        setTimeout(function (){
            $modal.hide();
        }, 200)
    })

    $userMenu.on('click', function (){
        if ($userMenuDrop.is(':hidden')) {
            $userMenuDrop.show()
            $userMenuDrop.addClass('duration-100 opacity-100 scale-100').removeClass('opacity-0 scale-95 duration-75')
        } else {
            $userMenuDrop.addClass('duration-75 opacity-0 scale-95').removeClass('opacity-100 scale-100 duration-100')
            setTimeout(function () {
                $userMenuDrop.hide()
            }, 75)
        }
    })

    $window.on('resize', function() {
        let newMode = $window.width() > 768 ? 'desk' : 'mob';

        if (newMode !== windowMode) {
            windowMode = newMode;

            $('#mobile-menu-open').addClass('block').removeClass('hidden');
            $('#mobile-menu-close').addClass('hidden').removeClass('block');
            $mobileMenu.addClass('hidden').removeClass('block');

            $userMenuDrop.addClass('duration-75 opacity-0 scale-95').removeClass('opacity-100 scale-100 duration-100')
            $userMenuDrop.hide()
        }
    })
})