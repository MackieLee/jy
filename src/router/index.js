const HelloWorld = r => require.ensure([], () => r(require('../components/HelloWorld')), 'HelloWorld')
const home = r => require.ensure([], () => r(require('../components/Home')), 'home')

export default [
  {
    path: '/',
    component: HelloWorld,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      }
    ]
  }
]
