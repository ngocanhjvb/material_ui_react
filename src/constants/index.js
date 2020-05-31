import AdminHomePage from "../pages/AdminHomePage";
import TaskBoard from "../pages/TaskBoard";
import DetailTask from "../pages/DetailTask";


export const GROUP_NAME = [
    {
        name: 'Group 1',
        value: 1,
    },
    {
        name: 'Group 2',
        value: 2,
    },
]

export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang Admin',
        exact: true,
        group:1,
        component: AdminHomePage
    },
    {
        path:'/task-board',
        name: 'QL Công Việc',
        group:1,
        component:TaskBoard
    },
    {
        path:'/detail-task',
        name: 'Chi Tiet Công Việc',
        group:2,
        component:DetailTask
    }
]

