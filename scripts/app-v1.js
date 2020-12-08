import $ from 'jquery';

$(function() {
    const $dropdown = $('#dropdown')
    const $modal = $('#modal')
    const $panel = $('#panel')
    const $deactivateAccountBtn = $('#deactivate-account')
    const $modalBtns = $modal.find('button')
    const $menu = $('#menu')
    const $menuBtn = $('#menu-button')
    const $notifBtns = $('#notif-mobile,#notif-desktop')
    const $closePanel = $('#close-panel')
    const $userMenu = $('#user-menu')
    const $banner = $('#banner')
    const $bannerBtn = $('#banner-button')
    let mode = $(window).width() > 768 ? 'desk' : 'mob';

    $deactivateAccountBtn.on('click', function (e) {
        $modal.show();
    })

    $modalBtns.on('click', function() {
        $modal.hide()
    })

    $menuBtn.on('click', function () {
        if ($menu.hasClass('hidden')) {
            $menu.addClass('block').removeClass('hidden')
        } else {
            $menu.addClass('hidden').removeClass('block')
        }
    })

    $notifBtns.on('click', function() {
        $panel.show()
    })
    $closePanel.on('click', function() {
        $panel.hide();
    })

    $userMenu.on('click', function () {
        if ($dropdown.is(':hidden')) {
            $dropdown.show()
        } else {
            $dropdown.hide()
        }
    })

    $bannerBtn.on('click', function() {
        $banner.remove()
    })

    $(window).on('resize', function() {
        const curMode = $(window).width() > 768 ? 'desk' : 'mob';

        if (curMode !== mode) {
            mode = curMode;

            $dropdown.hide()
            $menu.addClass('hidden').removeClass('block')
        }
    })
});
