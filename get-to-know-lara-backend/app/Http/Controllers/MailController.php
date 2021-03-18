<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MailController extends Controller
{
    function inboxEmails()
    {
        try {
            $userId = auth()->user()->id;
            $mail = DB::table("mail")->where('id_user_to', $userId)->where('is_read','=',0)->orderBy('sent', 'desc')->get();
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
}
