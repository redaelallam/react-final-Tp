<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; // يفضل إضافته
use Illuminate\Database\Eloquent\Model;

class Stagiaire extends Model
{
    use HasFactory;

    // هذا هو السطر الناقص الذي سبب المشكلة
    // يجب أن تتطابق هذه الأسماء مع ما ترسله من React ومع قاعدة البيانات
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'groupe'
    ];
}