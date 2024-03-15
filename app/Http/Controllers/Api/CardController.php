<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use Illuminate\Http\Request;
use App\Models\Card;

class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $card = Card::all();
        return $card;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CardRequest $request)
    {
        $card = new Card();
        $card->number = $request->input('number');
        $card->month = $request->input('month');
        $card->year = $request->input('year');
        $card->CVV = $request->input('CVV');
        $card->save();

        return response()->json([
            'message' => $card
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
