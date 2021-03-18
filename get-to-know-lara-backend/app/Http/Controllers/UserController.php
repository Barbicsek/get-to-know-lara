<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    function register(Request $request)
    {

        User::firstOrCreate([ "name" => $request->get('name'), "email" => $request->get('userEmail'), "password" => Hash::make( $request->get('userPassword'))]);
        return response()->json([
            'status_code' => 200,
            'message' => 'User created successfully'
        ]);
    }

    function login(Request $request)
    {
        try{
            $validation = $request->validate([
                'email' => 'required|email',
                'password' => 'required']);
        }
        catch (\Exception $exception){
            return response()->json("error", Response::HTTP_BAD_REQUEST);
        }


        $user= User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $user->createToken('authToken')->plainTextToken;
        return response()->json([
                'user' => $user,
                'token' => $token,
        ]);

    }





}

