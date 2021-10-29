<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Auth; 
use App\Models\Usuario; 
use Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller 
{  public $successStatus = 200;
    /** 
        * login api 
        * 
        * @return \Illuminate\Http\Response 
        */ 

       public function login(Request $request){ 
        
        $fields = $request->validate([
            'email'=>'required|string',
            'password'=>'required|string'
        ]);

        //Estas variables solo se utilizan si es que existe algún error
        $emailError = [ "email" => ["Este correo no corresponde a ningún usuario"]];
        $passwordError = [ "password" => ["Esta contraseña no corresponde al correo ingresado"]];
        
        $user = Usuario::where('email',$fields['email'])->first();

        if($user == null){
            return response()->json(['status'=>'Unauthorised', 
                                    "errors" => $emailError], 401); 
        }

        if(Hash::check($fields['password'],$user['password'])){ 
            
        return response()->json(['status'=>'Authorized'],200); 
        } 
        else{ 
            return response()->json(['status'=>'Unauthorised', 
                                    "errors" => $passwordError], 401); 
        } 
    }
}