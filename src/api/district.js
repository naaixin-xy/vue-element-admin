import request from '@/utils/request'

export function fetchProvinceList(query) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}

export function fetchCityList(query) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}

export function fetchCountyList(query) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}


export function fetchTownList(query) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}

export function fetchEnterpriseList(query) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}

export function fetchProjectList(query) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}


export function fetchEnterpriseDetail(id) {
    return request({
        url: '/vue-element-admin/article/detail',
        method: 'get',
        params: { id }
    })
}

export function fetchProjectDetail(id) {
    return request({
        url: '/vue-element-admin/article/detail',
        method: 'get',
        params: { id }
    })
}

export function createEnterprise(data) {
    return request({
        url: '/vue-element-admin/article/create',
        method: 'post',
        data
    })
}

export function createProject(data) {
    return request({
        url: '/vue-element-admin/article/create',
        method: 'post',
        data
    })
}


export function updateEnterprise(data) {
    return request({
        url: '/vue-element-admin/article/create',
        method: 'post',
        data
    })
}

export function updateProject(data) {
    return request({
        url: '/vue-element-admin/article/create',
        method: 'post',
        data
    })
}

export function Enterprise(data) {
    return request({
        url: '/vue-element-admin/article/create',
        method: 'post',
        data
    })
}

export function deleteProject(data) {
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
