import { request } from './request'

// 请求首页多个数据
export function getHomeMultidata () {
    return request({
        url: '/home/multidata'
    })
}