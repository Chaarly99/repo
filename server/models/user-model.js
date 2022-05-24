module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          email: {
            type: String,
            unique: true,
            required: true
          },
          passwd: String
        },
        { timestamps: true }
      )
    );
    return User;
  };

  // This Mongoose Model represents users collection in MongoDB database.
  // These fields will be generated automatically for each User
  // document: _id, name, email, passwd, createdAt, updatedAt, __v.