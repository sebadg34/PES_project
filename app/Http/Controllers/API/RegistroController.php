<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    public function registro()
    {
        return response()->json(['message' => 'Pasamos por el controlador :D']);
    }
}
