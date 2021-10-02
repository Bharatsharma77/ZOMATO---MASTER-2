/*
Route            /
Des              Get all the foods based on particular restaurant
Params           _id
Access           Public
Method           GET
*/

Router.get("/:_id", async(req,res) => {
    try {
      const {_id} = req.params;
      const foods = await FoodModel.find({ restaurant: _id });
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  })
  