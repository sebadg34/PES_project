<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Auth; 
use App\Models\Usuario; 
use Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

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

        $user = Usuario::where('email',$fields['email'])->first();


           if(Hash::check($fields['password'],$user['password'])){ 
              
            return response()->json(['success'=>'Authorized'],200); 
           } 
           else{ 
               return response()->json(['error'=>'Unauthorised'], 401); 
           } 
       }
}