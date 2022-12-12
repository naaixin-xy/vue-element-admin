import request from '@/utils/request'
import config  from '@/config'
export function fetchList(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}

export function fetchDetail(id) {
  return request({
    url: config.BASE_URL + '/device/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createRecord(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateRecord(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}

export function deleteRecord(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
