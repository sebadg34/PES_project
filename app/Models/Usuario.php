<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'password',
        'isAdmin',
    ];

    protected $hidden = [
        'isAdmin',
        'password',
        'remember_token',
    ];
    
    public function formulario()
    {
        return $this->hasOne(Formulario::class);
    }
    
}


