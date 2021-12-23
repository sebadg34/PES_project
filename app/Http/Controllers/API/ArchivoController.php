<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request; 
use App\Models\ArchivosAdmin; 
use Validator;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Str;

use Storage;

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

        $idFormulario = $request->idFormulario;

        foreach($request->file('Archivos') as $uploadedFile){
        
            $archivoPath = $uploadedFile->store("archivos_adjuntos", 'public');
            $nombreArchivoOriginal = $uploadedFile->getClientOriginalName();
            event(new Registered($archivoAdjunto = $this->create($idFormulario, $archivoPath, $nombreArchivoOriginal)));
        
        }        

        return response()->json([
            "message" => "success", 200]);

    }

    public function getArchivosAdjuntos($id){ 
    
        $listaArchivos = [];
        $archivos = ArchivosAdmin::all();

        foreach ($archivos as $a) {
            if($a->idFormulario == $id){
                $a2 = $a;
                $a2->peso = Storage::size("public/archivos_adjuntos/" . $a->nombreArchivo); 
                $listaArchivos[] = $a2;
            }
        }
      
        return response()->json(['data' => $listaArchivos], 200);   

    }    

    public function create($idFormulario, $archivoPath, $nombreArchivoOriginal)
    {
        return ArchivosAdmin::create([
            "idFormulario" => $idFormulario,
            'nombreArchivo' => basename($archivoPath),
            "nombreArchivoOriginal" => $nombreArchivoOriginal,
        ]);
    }        

}