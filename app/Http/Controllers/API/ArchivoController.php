<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Validator;
use Illuminate\Support\Str;

class ArchivoController extends Controller 
{  
    
    public function adjuntarArchivos(Request $request){ 
    
        $validator = Validator::make($request->all(), [
            'Archivos.*' => 'required|mimes:jpg,jpeg,png,pdf'
        ],[
            'Archivos.*.required' => 'Adjunta todos los archivos porfavor',
            'Archivos.*.mimes' => 'Sólo se permiten archivos en formato .jpg, .png, .pdf',
        ]);

        if($validator->fails()){
            return response()->json([
                "errors" => $validator->messages(),
            ]);
        }

        return response()->json([
            "message" => "success", 200]);

    }

}