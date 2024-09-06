const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "general",
        "legalProfessional",
        "corporateClient",
        "partnerInstitution",
        "admin",
      ],
      default: "general",
    },
    accessLevel: {
      type: String,
      enum: ["basic", "premium"],
      default: "basic",
      required: function () {
        return this.role !== "administrator";
      },
    },
    // languagePreference:{
    //   type:String,

    // },

    legalProfessional: {
      bio: String,
      categories: [String],
      experience: { type: Number, min: 0 },
      specialization: String,
      verified: { type: Boolean, default: false },
    },
    corporateClient: {
      companyName: String,
      legalNeeds: [String],
      gstNumber: { type: String, required: true, unique: true },
    },
    partnerInstitution: {
      institutionName: String,
      institutionType: {
        type: String,
        enum: ["university", "NGO", "lawFirm", "other"],
      },
      collaborationScope: String,
    },
    admin: {
      permissions: [
        {
          type: String,
          enum: ["manageUsers", "viewReports", "editContent", "moderate"],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
