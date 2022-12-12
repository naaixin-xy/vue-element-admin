/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '表格',
    icon: 'table'
  },
  children: [
    {
      path: 'device-list',
      component: () => import('@/views/table/device-list/index'),
      name: 'devicelist',
      meta: { title: '设备列表' }
    },
    {
      path: 'alarm-list',
      component: () => import('@/views/table/alarm-list/index'),
      name: 'alarmlist',
      meta: { title: '报警列表' }
    },
    {
      path: 'fault-list',
      component: () => import('@/views/table/fault-list/index'),
      name: 'faultlist',
      meta: { title: '故障列表' }
    },
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: '动态表格' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '可拖拽表格' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: '行内编辑' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '复杂表格' }
    }
  ]
}
export default tableRouter
