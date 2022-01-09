
import logo from "../logo/image 57.png";

const FAVORITE='FAVORITE'
const RESPOND='RESPOND'
const DISLIKE='DISLIKE'
const ADDFILE='ADDFILE'
const FAVORITELIST='FAVORITELIST'
const RESET='RESET'
const ERROR='ERROR'



const initialState =[
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:0,
        vacancy:'Продавец-консультант (ТРЦ Дарынок, ТРЦ Рив Гош, ТРЦ Нью Вей, м. Дарница)',
        logo:'https://fishki.ua/img/new-logo.png',
        salary: {
            size:'10000-15000 $',
            commit:' Ставка + процент от продаж'},
        company:'FISHKI.UA',
        city:'Kиев',
        img:logo,
        badges:['Обеды в офисе','Гибкий график','Спортзал'],
        time:'37 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:1,
        vacancy:'Специалист по внедрению программного обеспечения+техническая поддержка',
        logo:'https://upload.wikimedia.org/wikipedia/commons/7/7a/SUP_logo.png',
        salary: {
            size:'10000$',
            commit:'Ставка + процент от продаж '},
        company:'SupportYourApp',
        city:'KIEV',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-fd490def-c1ff-4768-9711-05c667c1493f.png',
        badges:['Обеды в офисе','Гибкий график',],
        time:'59 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:''
        ,error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:2,
        vacancy:'Фахівець з моделювання поведінки клієнтів (аналітик, SQL,PostgreSQL,MySQL)',
        logo:'https://eba.com.ua/wp-content/uploads/2007/12/Kyivstar-logo.png',
        salary: {
            size:'1300 $',
            commit:'Ставка + процент от продаж'},
        company:'Kyivstar',
        city:'Киев',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-887cfa0a-c86c-48ba-9bea-7ebdda53f09a.jpg',
        badges:['Обеды в офисе','Гибкий график','Спортзал'],
        time:'37 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:3,
        vacancy:'Head of Talent Acquisition and Middle/Senior Recruiter ,Kyiv',
        logo:'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/10592546_20210208124338.png',
        salary: {
            size:'10000-20000 $',
            commit:' Ставка + процент от продаж'},
        company:'iTalentify',
        city:'Киев',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-95bfda6c-16ff-472c-993c-bb50b08d67f3.png',
        badges:['Медицинская страховка','Корпоративные мероприятия'],
        time:'37 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:4,
        vacancy:'Водій на машину автопарку (новий автомобіль, автомат)',
        logo:'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/3806143_20201123140124.png',
        salary: {
            size:'28 000 — 35 000 грн',
            commit:'+бонус 25000 грн за кожного залученого друга!'},
        company:'Oazis-Park',
        city:'KIEV',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-3fb772f7-b135-404b-8789-816549b88fb0.png',
        badges:['Робота на Toyota Corolla 2021 автомат','Вільний графік, авто завжди у водія'],
        time:'1 час назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:5,
        vacancy:' Продавець, касир (метро Деміївська, Голосіївська, Васильківська, Теремк...',
        logo:'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/9671386_20210421121547.png',
        salary: {
            size:'10000-14000 ',
            commit:'+ процент от продаж'},
        company:'FOODpod',
        city:'KIEV',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-e0cc2e29-a597-4b50-93ef-8a8e5763411e.png',
        badges:['Регулярный пересмотр зарплат','Бонусы / премии'],
        time:'1 день назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:6,
        vacancy:'Продавець-консультант (ТЦ "Blockbuster Mall","Ocean Plaza")',
        logo:'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/403907_20210513160342.png',
        salary: {
            size:'10000-25000 $',
            commit:' Ставка + процент от продаж'},
        company:'SPORTMASTER',
        city:'Киев',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-7eadc9d4-95bc-43b0-a310-fbe43ae882a4.jpg',
        badges:['Гибкий график','Спортзал'],
        time:'7 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:7,
        vacancy:'Менеджер по продажам зарубежной недвижимости (Турция, Европа)',
        logo:'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/3051608_20211221153007.png',
        salary: {
            size:'16000-20000 грн',
            commit:' + премия'},
        company:'Такси 838',
        city:'Киев',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-0c70faf7-659e-4ea6-9a80-e82ca405a51f.png',
        badges:['Гибкий график'],
        time:'30 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:8,
        vacancy:'Автослесарь-ходовик, автомеханик (Троещина, Оболонь) Гарантированная ставка 30 000 грн!',
        logo:'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/1166294_20180330152047.png',
        salary: {
            size:'30 000 — 65 000 грн',
            commit:''},
        company:'OILER',
        city:'Kiev',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-b2e939c0-0731-487d-bcaf-cac679bafa68.jpg',
        badges:['Бесплатное обучение','Гибкий график','Скидки сотрудникам'],
        time:'57 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    },
    {
        status: {
            name:'Новая',
            color:'#FFE9E9'
        },
        id:9,
        vacancy:'HR-спеціаліст, менеджер з персоналу, рекрутер ,Киев р-н. Соломенский',
        logo:'https://vacancyimages.rabota.ua/custom-vacancy-086af097-f391-42eb-9d7d-2a7a89eb07a0.png',
        salary: {
            size:'10000-12000 $',
            commit:' Ставка + процент от продаж'},
        company:'ringoo',
        city:'Kiev',
        img:'https://vacancyimages.rabota.ua/custom-vacancy-086af097-f391-42eb-9d7d-2a7a89eb07a0.png',
        badges:['Обеды в офисе','Гибкий график','Спортзал'],
        time:'38 минут назад',
        isResponded:false,
        isFavorites:false,
        isDislike:false,
        urlFile:'',
        error:''
    }
]

export const statusReducer=(state=initialState,action) =>{
    switch (action.type){
        case FAVORITE:
            return state.map(el=> el.id === action.id ? {...el, isFavorites: !el.isFavorites,status: {name:'',color:''}} : el)
        case RESPOND:
            return state.map(el=>el.id===action.id?{...el, isResponded:true, status: {name:'Вы откликнулись',color:'#D5FFE6'}}:el)
        case DISLIKE:
            return state.map(el=> el.id === action.id ? {...el, isDislike: !el.isDislike,status: {name:'Неинтересная',color:'#C8D1D6'}} : el)
        case ADDFILE:
            return state.map(el=>el.id===action.id?{...el,urlFile:action.file}:el)
        case FAVORITELIST:
            return state.filter(el=>el.isFavorites===true)
        case ERROR:
            return state.map(el=>el.id===action.id?{...el,error:action.error}:el)
        case RESET:
            return initialState
        default:
            return state
    }
}


export const actions={
    favorite:(id)=>({type:FAVORITE,id}),
    respond:(id)=>({type:RESPOND,id}),
    dislike:(id)=>({type:DISLIKE,id}),
    addFile:(id,file)=>({type:ADDFILE,id,file}),
    favoriteList:()=>({type:FAVORITELIST}),
    reset:()=>({type:RESET}),
    error:(id,error)=>({type:ERROR,id,error})
}


