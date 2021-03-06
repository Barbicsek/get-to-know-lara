<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class MailController extends Controller
{
    function inboxEmails()
    {
        try {
            $userId = auth()->user()->id;
            $mail = DB::table("mail")
                ->join('users', 'mail.id_user_from', '=', 'users.id')
                ->where('id_user_to', $userId)
                ->where('is_read','=',0)
                ->orderBy('sent', 'desc')
                ->select('mail.*', 'users.name')
                ->get();
//            $mail = Mail::where('id_user_to', $userId)->where('is_read','=',0)->orderBy('sent', 'desc')->get();
            return response()->json([
                'mail' => $mail,
                'id' => $userId,
            ], 200);
        }catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['message' => 'something went wrong'], 400);
        }
    }

    function sentEmails()
    {
        try {
            $userId = auth()->user()->id;
            $mail = DB::table("mail")
                ->join('users', 'mail.id_user_to', '=', 'users.id')
                ->where('id_user_from', $userId)
                ->where('is_read','=',0)
                ->orderBy('sent', 'desc')
                ->select('mail.*', 'users.name')
                ->get();

            return response()->json([
                'mail' => $mail,
                'id' => $userId,
            ], 200);
        }catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['message' => 'something went wrong'], 400);
        }
    }

    function getMailAddresses()

    {
        try {
            $emailAddressesAndId = DB::table('users')
                ->select('id', 'email')
                ->get();
            return response()->json([
                'mail' => $emailAddressesAndId,
            ], 200);
        }catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['message' => 'something went wrong'], 400);
        }
    }

    function saveNewEmail(Request $request)
    {
        try{
            $userId = auth()->user()->id;
            Mail::insert([  "subject" => $request->get('subject'),  "message" => $request->get('message'), "id_user_from" => $userId, "id_user_to" => $request->get('userId')]);
            return response()->json([
                'status_code' => 200,
                'message' => 'Sent new email'
            ]);
        }
        catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['message' => 'something went wrong'], 400);
        }

    }
}
