import AdminHomePage from "../pages/AdminHomePage";
import TaskBoard from "../pages/TaskBoard";
import DetailTask from "../pages/DetailTask";
import TrendSession from "../pages/TrendSession";


export const GROUP_NAME = [
    {
        name: 'コンバージョン',
        value: 1,
    },
    {
        name: 'ユーザー環境',
        value: 2,
    },
    {
        name: '全体トレンド',
        value: 3,
    },
]

export const ADMIN_ROUTES = [
    {
        path: '/',
        name: '概要',
        exact: true,
        group:1,
        component: AdminHomePage
    },
    {
        path:'/task-board',
        name: '視聴機器',
        group:1,
        component:TaskBoard
    },
    {
        path:'/detail-task',
        name: '視聴ブラウザ・OS',
        group:2,
        component:DetailTask
    },
    {
        path:'/trend-session',
        name: 'セッション数',
        group:3,
        component:TrendSession
    }
]

