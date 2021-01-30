const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");



module.exports = {
    register: async (req, res) => {
       
        try {

            let {
				email,
				username,
			} = req.body;
        
			if (!req.body.name || !req.body.email || !req.body.username || !req.body.password) {
				return res
					.status(400)
					.json({ msg: "Not all fields have been entered." });
			}

			if (req.body.password.length < 5) {
                return res.status(400).json({
					msg: "The password needs to be at least 5 characters long.",
                });
            }
            

			const existingUser = await db.User.findOne({ username });
			if (existingUser) {
				return res.status(400).json({
					msg: "An account with this username has already been created",
				});
			}

			const existingEmail = await db.User.findOne({ email });
			if (existingEmail) {
				return res
					.status(400)
					.json({ msg: "An account with this email has already been created" });
            }
            

            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(req.body.password, salt);
      
            const newUser = new db.User({
                username: req.body.username,
                password: passwordHash,
                name: req.body.name,
                email: req.body.email
            });
            const savedUser = await newUser.save();
            res.json(savedUser);
        }
        catch (err) {
            if (err) {
               res.status(500).json({ error: err.message });
            };
        };
    },
    login: async (req, res) => {
		try {
			const { username, password } = req.body;

			if (!req.body.username || !req.body.password) {
				return res
					.status(400)
					.json({ msg: "Not all fields have been entered." });
			}

			const user = await db.User.findOne({ username });
			if (!user) {
				return res.status(400).json({ msg: "Username does not exist!" });
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({ msg: "Invalid password!" });
			}

			const token = jwt.sign(
				{
					exp: Math.floor(Date.now() / 1000) + 60 * 60,
					id: user._id,
				},
				"secret"
			);
			res.json({
				token,
				user: {
					id: user._id,
					name: user.name,
					username: user.username,
					email: user.email,
					reviews: [
						{
							spotifyId: null,
							review: null,
							rating: null
						}
					]
					}
				});
		} catch (err) {
			res.status(500).json({ error: err.message });
        }
	},
	findById: async (req, res) => {

		try {
			const foundUser = await db.User.findById(req.params.id)
			 
			res.json(foundUser)
		} catch (err) {
			res.status(500)
		}
	},
	saveReview: async (req, res) => {

		try {


			let id = req.params.userId

			await User.findOneAndUpdate({
				_id: id
			}, {
				$push: {
					reviews: {spotifyId: req.body.spotifyId, review: req.body.review, rating: req.body.rating, date: Date.now()}
				}
			})
			
			const foundUser = await db.User.findById(id)

				res.json(foundUser)

		} catch(err) {
			res.status(500)
		}
	},
	getReview: async (req, res) => {

		try {
			let id = req.params;
			const foundReview = await User.find({ "reviews.spotifyId": id.spotifyId});
			
			res.json(foundReview);

		} catch(err) {
			res.status(500)
		}
	}
}