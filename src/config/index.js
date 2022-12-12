export default {
    BASE_URL:"http://127.0.0.1:9527/",
    URL:{
        iot:{

        
        },
        wechat:{

        
        },
        voice:{

        
        },
        sms:{

        
        },
        main:{
            device:{
                add:"/main/device/add",
                delete:"/main/device/delete",
                list:"/main/device/list",
                update:'/main/device/update',
                detail:"/main/device/detail"
            },
            user:{
                add:"/main/user/add",
                delete:"/main/user/delete",
                list:"/main/user/list",
                update:'/main/user/update',
                detail:"/main/user/detail"
            },
            data:{
                delete:"/main/data/delete",
                list:"/main/data/list",
                detail:"/main/data/detail"
            },
            fault:{
                delete:"/main/fault/delete",
                list:"/main/fault/list",
                update:'/main/fault/update',
                detail:"/main/fault/detail"
            },
            alarm:{ 
                delete:"/main/alarm/delete",
                list:"/main/alarm/list",
                update:'/main/alarm/update',
                detail:"/main/alarm/detail"
            },
            enterprise:{
                add:"/main/enterprise/add",
                delete:"/main/enterprise/delete",
                list:"/main/enterprise/list",
                update:'/main/enterprise/update',
                detail:"/main/enterprise/detail"
            },
            project:{
                add:"/main/enterprise/add",
                delete:"/main/enterprise/delete",
                list:"/main/enterprise/list",
                update:'/main/enterprise/update',
                detail:"/main/enterprise/detail"
            },
            area:{
                add:"/main/area/add",
                delete:"/main/area/delete",
                list:"/main/area/list",
                update:'/main/area/update',
                detail:"/main/area/detail"
            },
           
            

        
        },
        log:{
            login:{
                list:"/log/login/list",
                delete:"/log/login/delete"
            },
            operate:{
                list:"/log/operate/list",
                delete:"/log/operate/delete"
            },
            error:{
                list:"/log/error/list",
                delete:"/log/error/delete"
            }       
        },
        region:{
            province:{
                list:"/region/province/list",
            },
            city:{
                list:"/regio/city/list",
            },
            county:{
                list:"/region/county/list",
            },
            town:{
                list:"/region/town/list",
            }


        }
    }
}