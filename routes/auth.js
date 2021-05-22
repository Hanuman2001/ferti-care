const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const router = express.Router()
const auth = require('../middleware/auth')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
//@route get api/auth
//@desc Test Route
//@access Public

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

//@route POST api/users
//@desc authenticate user
//@access Public

router.post(
    '/',
    [
        check('name', 'Enter a valid name').not().isEmpty(),
        check('password', 'Enter a password of at least 6 characters').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, password } = req.body

        try {
            //check if user exists

            let user = await User.findOne({ name })
            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials ' }] })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials ' }] })
            }

            const payload = {
                user: {
                    id: user.id,
                },
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 3600000 },
                (err, token) => {
                    if (err) throw err
                    res.json({ token })
                }
            )
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Sever error')
        }
    }
)

module.exports = router
