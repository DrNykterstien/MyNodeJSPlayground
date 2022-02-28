const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// Set Storage Engine(there's different ways for that) and the way we went for will help us to get the results you want.
const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: function (req, file, cb){
		//1st param err, filename => fieldname is what we used in html
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

// Init upload, for upload function
const upload = multer({
	storage,
	limits: {fileSize: 1024 ** 2},
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).single('myImage'); // for single file and you could also check array

// Check file Type
function checkFileType(file, cb) {
	// we should check extension and mime type.

	// Allowed extensions
	const fileTypes = /jpeg|jpg|png|gif/;

	// Check ext
	const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())

	// Check mime
	const mimeType = fileTypes.test(file.mimetype)

	if(mimeType && extName) {
		return cb(null, true)
	} else {
		cb('Error: Images Only!')
	}
}

// Init express app
const app = express();
const port = 9021
// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static(path.join('./public')))

app.get('/', (req, res) => {
	res.render('index')
})

app.post('/upload', (req, res) => {
	upload(req, res, (err) => {
		if(err) {
			res.render('index', {
				msg: err
			})
		} else {
			// we wanna do check for submitting without any file attached
			if(req.file == undefined) {
				res.render('index', {
					msg: 'Error: No File Selected!'
				})
			} else {
				res.render('index', {
					msg: 'File Uploaded',
					file: `uploads/${req.file.filename}`
				})
			}
		}
	})
})

app.listen(port,()=>console.log(`listening on port ${port}`))
