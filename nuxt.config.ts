import Aura from '@primevue/themes/aura'

const locale = {
  accept: 'Подтвердить',
  reject: 'Отменить',
  cancel: 'Отменить',
  clear: 'Очистить',
  dateIs: 'Дата',
  dateIsNot: 'Не дата',
  dateBefore: 'Дата до',
  dateAfter: 'Дата после',
  chooseYear: 'Выбрать год',
  chooseMonth: 'Выбрать месяц',
  chooseDate: 'Выбрать дату',
  prevDecade: 'Предыдущее десятилетие',
  nextDecade: 'Следующее десятилетие',
  prevYear: 'Предыдущий год',
  nextYear: 'Следующий год',
  prevMonth: 'Предыдущий месяц',
  nextMonth: 'Следующий месяц',
  prevHour: 'Предыдущий час',
  nextHour: 'Следующий час',
  prevMinute: 'Предыдущая минута',
  nextMinute: 'Следующая минута',
  prevSecond: 'Предыдущая секунда',
  nextSecond: 'Следующая секунда',
  today: 'Сегодня',
  weekHeader: 'Неделя',
  firstDayOfWeek: 1,
  dateFormat: 'dd.mm.yy',
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
  dayNames: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  dayNamesShort: [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
  ],
  dayNamesMin: [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
  ],
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },

  routeRules: {
    '/': { prerender: true },
  },

  modules: [
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
      locale,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-11-18',
})