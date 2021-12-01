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
    Route::get('logout', [App\Http\Controllers\API\LoginController::class,'logout'])->name('logout');
    Route::get('check', [App\Http\Controllers\API\LoginController::class,'check'])->name('check');
    Route::get('ver-registro', [App\Http\Controllers\API\RegistroController::class,'verRegistro'])->name('ver-registro');
    Route::get('ver-registro/{id}', [App\Http\Controllers\API\RegistroController::class,'verRegistroByID'])->name('ver-registro/{id}');
    Route::get('registros', [App\Http\Controllers\API\RegistroController::class,'getRegistros'])->name('registros');
    Route::post('registro', [App\Http\Controllers\API\RegistroController::class,'registro'])->name('registro');
    Route::post('cambiar-sostenedor', [App\Http\Controllers\API\RegistroController::class,'cambiarSostenedor'])->name('cambiarSostenedor');
});

Route::post('login', [App\Http\Controllers\API\LoginController::class,'login'])->name('login');


//Ruta que toman los usuarios no autenticados
Route::get("unauthenticated", function(){
    return(["message"=>"Unauthenticated."]);
})->name("unauthenticated");

