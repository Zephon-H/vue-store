import { request } from './request'
export function getDetail (id) {
    return request({
        url: '/detail',
        params: {
            id
        }
    })
}

export function getRecommend () {
    return request({
        url: '/home/data',
        params: {
            type: 'new',
            page: '1'
        }
    })
}


export class Goods {
    constructor(detail) {
        this.title = detail.title
        this.price = detail.price
    }
}

export class Shop {
    constructor(shop) {
        this.name = shop.name
        this.logo = shop.logo
        this.totalScore = shop.totalScore
        this.shopFansNum = shop.shopFansNum
        this.goodsNum = shop.goodsNum
        this.userEvaluateScore = shop.userEvaluateScore
        this.logisticsLvyueScore = shop.logisticsLvyueScore
        this.afterServiceScore = shop.afterServiceScore
    }
}

export class Comment {
    constructor(res) {
        this.data = res.comment.result.comments
        let hot = res.comment.result.hotCommentTagStatistics
        this.hotCommentTag = []

        for (let i = 0; i < hot.length && i < 6; i++) {
            this.hotCommentTag.push({
                'name': hot[i].name, 'count': hot[i].count
            })
        }
    }
}
