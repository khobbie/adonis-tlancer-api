import Mongoose,{ Schema } from '@ioc:Mongoose'

export default Mongoose.model('Pre-Registration',
  new Schema({
    type: {
      required: true,
      type: String
    },
    subject: {
      required: false,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    child_name: {
      required: false,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    mobile: {
      required: true,
      type: String
    }
  },
    { timestamps: true }
  )
);


// import { Schema, model } from "@ioc:Mongoose";

// export default model('Registration',
//   new Schema({
//     type: {
//         required: true,
//         type: String
//     },
//     subject: {
//         required: false,
//         type: String
//     },
//     name: {
//         required: true,
//         type: String
//     },
//     child_name: {
//         required: false,
//         type: String
//     },
//     email: {
//         required: true,
//         type: String
//     },
//     mobile: {
//         required: true,
//         type: String
//     }
// },
// { timestamps: true })
// )


// const mongoose = require('mongoose');



// // const mongoose = require('mongoose');

// const RegistrationSchema = new mongoose.Schema({
//     type: {
//         required: true,
//         type: String
//     },
//     subject: {
//         required: false,
//         type: String
//     },
//     name: {
//         required: true,
//         type: String
//     },
//     child_name: {
//         required: false,
//         type: String
//     },
//     email: {
//         required: true,
//         type: String
//     },
//     mobile: {
//         required: true,
//         type: String
//     }
// },
// { timestamps: true })


// // module.exports = mongoose.model('Registrations', RegistrationSchema)


// export default mongoose.model("Registration", RegistrationSchema);
