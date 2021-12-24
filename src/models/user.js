const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  phone: {
    type: String,
    // validate(value) {
    //   if (value) {
    //     if (value.len() != 10) {
    //       throw new Error("Number must be 10 digit");
    //     }
    //   }
    // },
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.virtual("clinic", {
  ref: "clinic",
  localField: "_id",
  foreignField: "owner",
});

// doctorSchema.virtual("appointments", {
//   ref: "Appointment",
//   localField: "_id",
//   foreignField: "doctorId",
// });
// doctorSchema.methods.toJSON = function () {
//   const doctor = this;
//   const doctorObject = doctor.toObject();

//   delete doctorObject.tokens;
//   delete doctorObject.password;
//   delete doctorObject.__v;
//   return doctorObject;
// };

// doctorSchema.methods.getDoctorAuthToken = async function () {
//   const doctor = this;
//   const token = jwt.sign(
//     { _id: doctor._id.toString() },
//     process.env.JWT_SECRET
//   );
//   doctor.tokens = doctor.tokens.concat({ token });
//   await doctor.save();

//   return token;
// };

// doctorSchema.methods.toJSON = function () {
//   const doctor = this;
//   const doctorObject = doctor.toObject();

//   delete doctorObject.tokens;
//   delete doctorObject.password;
//   delete doctorObject.__v;
//   return doctorObject;
// };

const User = mongoose.model("user", userSchema);

module.exports = User;
