export interface BannerInterface {
    id: string,
    file_url: string,
    folder_id: string,
    file: string,
    name: string
}

export interface CardInterface {
    id: string,
                attributes: {}, //
                title: string,
                slug: string,
                value: number,
                spot_value: number,
                sales: number,
                condition: string,
                thumb: {
                    file_url: string,
                    file: string
                },
                card: null,
                item: {
                    attributes: {}, //
                    brand: string,
                    short_desc: string,
                    thumb: {
                        file_url: string,
                        file: string
                    }
                },
                variations: [], //
                brand: string,
                short_desc: string
}

