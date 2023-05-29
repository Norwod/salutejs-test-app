import { GalleryCard, GalleryItem, LeftRightCellView, ListCard, PaymentInvoice } from '@salutejs/scenario';

export const createOrderBundle = (): ListCard => {
    return {
        type: 'list_card',
        paddings: {
            top: '9x',
            bottom: '12x',
            left: '8x',
            right: '8x',
        },
        cells: [
            {
                type: 'text_cell_view',
                content: {
                    text: 'Корзина',
                    typeface: 'headline3',
                    text_color: 'default',
                },
                paddings: {
                    bottom: '2x',
                },
            },
            {
                type: 'left_right_cell_view',
                paddings: {
                    top: '10x',
                },
                left: {
                    type: 'simple_left_view',
                    texts: {
                        title: {
                            text: 'Итого',
                            typeface: 'footnote1',
                            text_color: 'secondary',
                        },
                    },
                },
                right: {
                    type: 'detail_right_view',
                    detail: {
                        text: `Text`,
                        typeface: 'footnote2',
                        text_color: 'default',
                        max_lines: 0,
                    },
                },
            },
        ],
    };
};


export const imageCard = (): GalleryCard => {
    return {
        type: 'gallery_card',              
        items: [
            {
                type: 'media_gallery_item',
                image: {
                    url: "https://content.sberdevices.ru/smartmarket-smide-prod/94853/94854/wbIuwqNzvz06zLZH.png",
                    hash: '98d8b98f09389e7cb01c31d76a686dd1',
                    size: {
                        width: 'small',
                        aspect_ratio: 1,
                    },
                },
                bottom_text: {
                    text: `bottom Title`,
                    typeface: 'caption',
                    text_color: 'secondary',
                    max_lines: 1,
                    margins: {
                        top: '2x',
                    },
                },
                top_text: {
                    text: "Top title",
                    typeface: 'footnote1',
                    text_color: 'default',
                    max_lines: 2,
                },               
            }

        ]  
    };
};

export const imageCardTest = (): GalleryCard => {
    return {
        type: 'gallery_card',              
        items: [
            {
                type: 'media_gallery_item',
                image: {
                    url: "https://content.sberdevices.ru/smartmarket-smide-prod/94853/94854/wbIuwqNzvz06zLZH.png",
                    hash: '98d8b98f09389e7cb01c31d76a686dd1',
                    size: {
                        width: 'small',
                        aspect_ratio: 1,
                    },
                }         
            }

        ]  
    };
};