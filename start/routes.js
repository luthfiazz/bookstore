'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// Route.get('testing', ()=>'Hello luthfi').as('get.hello');

Route.get('/adonis/', 'TestController.index');
Route.post('/adonis/create', 'TestController.create');
Route.put('/adonis/update', 'TestController.update');
// Route.get('/', () => 'Hello World');
// Route.put('/', () => 'ini adalah put');
// Route.post('/', () => 'ini adalah put');
// Route.delete('/', () => 'ini adalah put');
// Route.patch('/', () => 'ini adalah put');
