$(document).ready(function () {
    const imgElem = $('.image img');

    $(imgElem).on('click', function () {

        const popupElem = $('.popup');
        const popupImage = $('.popup_image img')

        const nextBtn = $('.buttons .next')
        const prevBtn = $('.buttons .prev')

        popupImage.attr('src', $(this).attr('src'))
        popupElem.slideToggle();

        const images = [];

        nextBtn.on('click', function () {
            imgElem.each(function () {
                images.push($(this).attr('src'));
            })

            const changeImage = $(popupImage).attr('src')

            for (let i = 0; i < images.length; i++) {
                if (images[i] == changeImage) {
                    $(popupImage).attr('src', images[i + 1])
                }
            }
        })
        prevBtn.on('click', function () {
            // popupImage.attr('src', $(imgElem.next().attr('src')))
            imgElem.each(function () {
                images.push($(this).attr('src'));
            })

            const changeImage = $(popupImage).attr('src')

            for (let i = 0; i < images.length; i++) {
                if (images[i] == changeImage) {
                    $(popupImage).attr('src', images[i - 1])
                }
            }
        })
    })
})