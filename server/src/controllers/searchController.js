import { getApartaments } from "../services/apartment.js";
export default class SearchController {
    static async search(req, res) {
        try{
            const apartments = await getApartaments(req.query.name, req.query.email);

            if (!apartments){
                return res.status(400).json({error: "Name can't be undefined"});
            }

            if (apartments.length === 0){
                return SearchController.#apartmentsNotFound(res);
            }
            
            return res.status(200).send(apartments);
        } 
        catch(err){
            return res.status(500).json({error: err.messege});
        }  
    }

    static async #apartmentsNotFound(res) {
        return res.status(404).json({ error: 'There are no apartments with this filter' });
    }
}