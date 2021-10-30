<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [App\Http\Controllers\API\LoginController::class,'user'])->name('user');
    Route::post('logout', [App\Http\Controllers\API\LoginController::class,'logout'])->name('logout');
    Route::get('check', [App\Http\Controllers\API\LoginController::class,'check'])->name('check');

});

Route::post('login', [App\Http\Controllers\API\LoginController::class,'login'])->name('login');