const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { Pantheon } = require("../models")



module.exports = {
    register: async (req, res) => {
        try {

            let {
				email,
				username,
			} = req.body;
        
			if (!req.body.name || !req.body.email || !req.body.username || !req.body.password) {
				return res
					.status(400).json({ 
						msg: "Not all fields have been entered." 
					});
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

			const error = {};

			const { username, password } = req.body;

			if (!req.body.username || !req.body.password) {
				return res.send("Not all fields have been entered." )
			}

			const user = await db.User.findOne({ username });
			if (!user) {
				return res.send("User could not be found" )

			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.send("Invalid password")

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
					],
					friend: [null]
					}
				});
		} catch (error) {
			res.json(error)
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
	},
	addFriend: async (req, res, err) => {
		
		try {
			const value = (Object.keys(req.body));
			const params = req.params.username;

			const checkUserHasFriend = await db.User.findOne({ username: params });

			if (checkUserHasFriend.friend.includes(value)) {
				return res.send("User is already friends with this user")
			} else {
				const foundUser = await db.User.find({
					username: value
				})
	
	
				if (foundUser.length === 0) {
					return res.send("No username was found with the given username")
				} else {
					await User.findOneAndUpdate({
						username: params
					}, {
						$push: {
							friend: value
						}
					});
					return res.send("Friend Added")
				}

			}

		} catch (err) {
			console.log("we messed up")
		}
	},
	
	getFriends: async (req, res) => {
		try {
			const foundUser = await db.User.findById(req.params.userId)
		
			return res.json(foundUser.friend);
			
		} catch (err) {
			res.status(500)
		}
	},

	acceptPantheon: async (req, res) => {
		try {
			const username = (Object.keys(req.body));
			const pantheonId = req.params;

			const testIfPantheon = await db.User.find({ username: username});


			if (testIfPantheon[0].pantheon.length === 0) {
				
				const findUser = await db.User.findOneAndUpdate({ 
					username: username
				}, {
					$push: {
						pantheon: [pantheonId.id]
					}
				});
				const updatePantheon = await db.Pantheon.findOneAndUpdate({
					_id: pantheonId.id
				}, {
					$push: {
						acceptedPlayers: username[0]
					}
				});

				return res.send("Challenge has been accepted. This is the users first Pantheon Challenge!")

			} else { for (let i = 0; i < testIfPantheon[0].pantheon.length; i++) {
				if (testIfPantheon[0].pantheon[i] == pantheonId.id) {

				   return res.send("Challenge has already been accepted")
			   } else {

				   const findUser = await db.User.findOneAndUpdate({ 
					   username: username
				   }, {
					   $push: {
						   pantheon: [pantheonId.id]
					   }
				   });
				   const updatePantheon = await db.Pantheon.findOneAndUpdate({
					   _id: pantheonId.id
				   }, {
					   $push: {
						   acceptedPlayers: username[0]
					   }
				   });

				   return res.send("Challenge has been accepted")


			   	}

			
				}
			}
			
			
		} catch (err) {
			console.log("there is an error")
			console.log(err)
		}
	}

}