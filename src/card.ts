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