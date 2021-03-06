<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mail', function (Blueprint $table) {
            $table->id();
            $table->string('subject');
            $table->string('message');
            $table->boolean('is_read')->default(0);
            $table->unsignedBigInteger('id_user_from');
            $table->unsignedBigInteger('id_user_to');
            $table->foreign('id_user_from')->references('id')->on('users');
            $table->foreign('id_user_to')->references('id')->on('users');
            $table->timestamp('sent');
            $table->timestamp('created')->default(date('Y-m-d H:i:s'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mail');
    }
}
