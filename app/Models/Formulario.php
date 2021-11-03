<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formulario extends Model
{
    use HasFactory;

    protected $fillable = [
        'rutEstudiante',
        'nombreCompletoEstudiante',
        'sede',
        'carrera',
        'anioIngreso',
        'email',
        'scanCarnetEstudiante',
        'rutSostenedor',
        'nombreCompletoSostenedor',
        'parentezco',
        'scanCarnetSostenedor'
    ];

    public function formulario()
    {
        return $this->hasOne(Formulario::class);
    }
}


