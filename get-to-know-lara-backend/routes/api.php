<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/registration', function (Request $request){
    $userController = new UserController();
    return $userController->register($request);
});

Route::post('/login', function(Request $request){
    $userController = new UserController();
    return $userController->login($request);
});



Route::group(['middleware' => ['auth:sanctum']], function(){

    Route::get('/mail/inbox', function(){
        $mailController = new \App\Http\Controllers\MailController();
        return $mailController->inboxEmails();
    });

    Route::get('/mail/sent', function(){
        $mailController = new \App\Http\Controllers\MailController();
        return $mailController->sentEmails();
    });

    Route::get('/mail/compose', function(){
        $mailController = new \App\Http\Controllers\MailController();
        return $mailController->getMailAddresses();
    });

    Route::post('/mail/compose', function(Request $request){
        $mailController = new \App\Http\Controllers\MailController();
        return $mailController->saveNewEmail($request);
    });


});


