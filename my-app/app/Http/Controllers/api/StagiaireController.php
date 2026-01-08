<?php
namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Stagiaire;
use Illuminate\Http\Request;

class StagiaireController extends Controller
{
    // GET /api/stagiaires
    public function index()
    {
        return Stagiaire::all();
    }

    // POST /api/stagiaires
    public function store(Request $request)
    {
        return Stagiaire::create($request->all());
    }

    // PUT /api/stagiaires/{id}
    public function update(Request $request, $id)
    {
        $stagiaire = Stagiaire::findOrFail($id);
        $stagiaire->update($request->all());
        return $stagiaire;
    }

    // DELETE /api/stagiaires/{id}
    public function destroy($id)
    {
        Stagiaire::destroy($id);
        return response()->json(['message' => 'Stagiaire supprimé']);
    }
    public function show($id)
    {
        $stagiaire = Stagiaire::find($id);

        if (!$stagiaire) {
            return response()->json([
                'message' => 'Stagiaire introuvable'
            ], 404);
        }

        return response()->json($stagiaire);
    }
}
?>