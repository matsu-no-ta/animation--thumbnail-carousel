document.addEventListener("DOMContentLoaded", function () {
    // メインスライダー
    const main = new Splide(".splide-main", {
        type: "fade", // スライダーの切り替え表示：フェード
        rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
        pagination: false, // ページネーション非表示
        arrows: true, // 矢印表示
        breakpoints: { // ブレークポイント(768px)の時
            768: {
                arrows : false, // 矢印非表示
            },
        },
    });
    // サムネイル
    const thumbnails = new Splide(".thumbnail-carousel", {
        fixedWidth: 160, // 幅160px
        gap: 10, // スライダーの間隔 10px
        rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
        type: "loop", // スライドのループさせる
        pagination: false, // ページネーション非表示
        isNavigation: true, // 他のスライダーのナビゲーションとしてそれぞれのスライドをクリック可能にする
        focus: "center", // アクティブなスライドを中央寄せ
        arrows: false, // 矢印表示
        breakpoints: { // ブレークポイント(600px)の時
            600: {
                fixedWidth : 64, // 幅64px
            },
        },
    });
    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});