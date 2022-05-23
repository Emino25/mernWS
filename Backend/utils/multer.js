// const multer = require("multer");
// const storage = (path) => { multer.diskStorage({
//     destination: "./uploads/"+path,filename:(req,file,callback) => { callback(null,
//         file.fieldname+"_"+Date.now()+"_"+file.originalname) }
// }) }

// const upload = (path) => {
//     multer({
//         storage:storage(path),
//         fileFilter: (req,file,callback) => {
//             if (file.mimetype === "image/png" || filemimetype === "image/jpg" || filemimetype === "image/jpeg" || filemimetype === "image/gif") {
//                 callback(null,true)
//             } else {
//                 callback(null,false)
//                 return callback(new Error("only .png or jpg or gif"))
//             }
//         }
//     })
// }

// module.exports = upload

const multer = require("multer");
const storage = (path) =>
  multer.diskStorage({
    destination: "./uploads/" + path,
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}- ${file.originalname}`;
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  });

const upload = (path) =>
  multer({
    storage: storage(path),
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });
module.exports = upload;