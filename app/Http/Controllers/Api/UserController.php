<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    // Route::get('/getAll', [UserController::class, 'getAll']);
    // Route::get('/{user}', [UserController::class, 'show']);
    // Route::post('/', [UserController::class, 'store']);
    // Route::put('/{user}', [UserController::class, 'update']);
    // Route::delete('/{user}', [UserController::class, 'destroy']);
    public function getAll ()
    {
        // $users = UserResource::collection(User::all());
        $users = User::all();

        return response()->json(['success' => true, 'data' => $users]);
    }

    public function show ($id) 
    {
        $user = User::find($id);
        return response()->json(['success' => true, 'data' => $user]);
    }

    public function store (Request $request)
    {
        $user = User::create($request->all());
        return response()->json(['success' => true, 'data' => $user]);
    }

    public function update (Request $request, $id)
    {
        $user = User::find($id);
        if (!empty($user)) {
            $user->update($request->all());
        }
        return response()->json(['success' => true, 'data' => $user]);
    }

    public function destroy ($id) 
    {
        $user = User::find($id);
        if (!empty($user)) {
            $user->delete();
        }
        return response()->json(['success' => true, 'data' => '']);
    }

}
