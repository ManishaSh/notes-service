module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      content: String,
      status: String
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Notes = mongoose.model("notes", schema);
  return Notes;
};
